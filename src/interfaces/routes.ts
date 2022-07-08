import { Request, Response } from 'express';

export interface IRoutes {
  path: string;
  method: string;
  action: (req: Request, res: Response) => void;
  middleware?: [];
  auth?: string;
}

export interface IIncludeRoutesPrefix {
  routes: IRoutes[];
  prefixRoute: string;
}
