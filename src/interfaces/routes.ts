import { Request, Response, NextFunction } from 'express';

export interface IRoutes {
  path: string;
  method: string;
  action: (req: Request, res: Response) => void;
  middlewares?: { (req: Request, res: Response, next: NextFunction): void }[];
  auth?: string;
}

export interface IIncludeRoutesPrefix {
  routes: IRoutes[];
  prefixRoute: string;
}
