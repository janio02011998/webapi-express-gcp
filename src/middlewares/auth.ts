import { Firestore } from '@app/config/firebase';
import { Request, Response, NextFunction } from 'express';

export async function basicAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    res.set('WWW-Authenticate', 'Basic');
    const authHeader: string = req.headers.authorization || 'null';

    const parts = authHeader.split(' ');

    if (parts.length !== 2) throw new Error('Token error');

    const [scheme, token] = parts;
    if (!authHeader) throw new Error('No token provided');

    if (!/Basic/i.test(scheme)) throw new Error('Token malformatted');

    const client = await Firestore.collection('clients')
      .where('basicAuth', '==', token)
      .get();

    if (!client || (client && client.empty)) {
      throw new Error('Crendenciais inválidas');
    }

    return next();
  } catch (e: any) {
    return res.sendStatus(401).send({ error: e.message || 'Token invalid!' });
  }
}
