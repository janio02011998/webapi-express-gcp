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
    return res.send({ success: true }).sendStatus(200);
  } catch (err) {
    throw err;
  }
}

export default {
  action: create,
};
