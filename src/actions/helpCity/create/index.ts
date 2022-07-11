import { Firestore } from '@app/config/firebase';
import { Request, Response } from 'express';

async function create(req: Request, res: Response) {
  try {
    await Firestore.collection('helpCity').add({
      name: 'Camacan',
      districts: [
        { name: 'Panelinha' },
        { name: 'Jacareci1' },
        { name: 'Leo Ventura' },
      ],
      coords: {
        latitude: 0,
        longitude: 0,
      },
    });
    return res.status(200).send({ success: true });
  } catch (err) {
    return res.status(400).send('Erro on create new city');
  }
}

export default {
  action: create,
};
