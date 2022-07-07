import { Request, Response } from 'express';

const HTMLtoPDF = require('html-pdf-node');

interface IOutputPDF {
  url: string;
  name: string;
  buffer: Buffer;
}

async function downloadPDF(req: Request, res: Response) {
  const { url, fileName } = req.body;

  const options = { format: 'A4' };
  const file = [{ url, name: `${fileName}.pdf` }];

  let pdfBuffer;

  await HTMLtoPDF.generatePdfs(file, options).then(
    async (output: IOutputPDF[]) => {
      pdfBuffer = output[0].buffer;
    },
  );

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=${fileName}.pdf`);

  return res.send(pdfBuffer).status(200);
}

export default {
  action: downloadPDF,
};
