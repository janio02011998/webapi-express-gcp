import {Request, Response} from 'express';

const prefixRoute = '/helpCity';

const routes = [
  {
    method: 'GET',
    path: '/',
    description: 'get the hello world',
    action: (req: Request, res: Response)=> {
      
      return res.status(200).send({ message: 'Hello World'});
    }
  }
]

export default {
  prefixRoute,
  routes
}