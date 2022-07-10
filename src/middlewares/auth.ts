import { Firestore } from '@app/config/firebase';
import { Request, Response, NextFunction } from 'express';

export async function basicAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authHeader: string = req.headers.authorization || '';
    const parts = authHeader.split(' ');

    if (parts.length !== 2) throw { message: 'Token error' };

    const [scheme, token] = parts;

    if (!authHeader) throw { message: 'No token provided' };

    if (!/Basic/i.test(scheme)) throw { message: 'Token malformatted' };

    const client = await Firestore.collection('clients')
      .where('basicAuth', '==', token)
      .get();

    if (!client || (client && client.empty)) {
      throw { message: 'Crendenciais inválidas' };
    }

    return next();
  } catch (e: any) {
    return res.sendStatus(401).send({ error: e.message || 'Token invalid!' });
  }
}
