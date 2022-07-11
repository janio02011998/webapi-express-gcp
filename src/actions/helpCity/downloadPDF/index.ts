import { Request, Response } from 'express';
import * as HTMLtoPDF from 'html-pdf-node';
import memoryStreams from 'memory-streams';
import hummus from 'hummus';

interface IOutputPDF {
  name: string;
  buffer: Buffer;
}

function combinePDFBuffers(firstBuffer: Buffer, secondBuffer: Buffer) {
  const outStream = new memoryStreams.WritableStream();

  const firstPDFStream = new hummus.PDFRStreamForBuffer(firstBuffer);
  const secondPDFStream = new hummus.PDFRStreamForBuffer(secondBuffer);

  const pdfWriter = hummus.createWriterToModify(
    firstPDFStream,
    new hummus.PDFStreamForResponse(outStream),
  );
  pdfWriter.appendPDFPagesFromPDF(secondPDFStream);
  pdfWriter.end();
  const newBuffer = outStream.toBuffer();
  outStream.end();

  return newBuffer;
}

async function getBufferFromURL(urls: string[]) {
  const options = {
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: {
      right: 10,
      left: 10,
    },
  };
  const files = urls.map((item: string) => {
    return { url: item };
  });

  const list: Buffer[] = [];

  await HTMLtoPDF.generatePdfs(files, options).then((output: IOutputPDF[]) => {
    output.forEach(item => {
      list.push(item.buffer);
    });
  });

  return list;
}

async function downloadCSV(req: Request, res: Response) {
  try {
    const { urls } = req.body;

    const listBuffers = await getBufferFromURL(urls);

    const [first, second] = listBuffers;

    const pdf = combinePDFBuffers(first, second);

    res.setHeader('Content-Type', 'application/pdf');
    return res.attachment('relatorio.pdf').send(pdf);
  } catch (error: any) {
    return res.status(400).send(error.message);
  }
}

export default {
  action: downloadCSV,
};
