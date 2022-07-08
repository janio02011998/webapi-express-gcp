import express, { Express } from 'express';
import cors from 'cors';
import swagger from 'swagger-ui-express';

import router from '@app/routes';
import documentation from '@app/docs/swagger';

const api: Express = express();

api.use(cors());
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.use((req, res, next) => {
  next();
});

api.use(swagger.serveWithOptions({}));
api.get('/api-docs', swagger.setup(documentation));

api.use(router);

export default api;
