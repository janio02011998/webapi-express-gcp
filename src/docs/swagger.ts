const info = {
  title: 'API',
  description: 'API to learn about new stacks',
  contact: {
    email: 'janiocarvalhojr@gmail.com',
  },
  version: '2.0.0',
  swagger: '2.0',
};

export default {
  info,
  openapi: '3.0.0',
  servers: [
    {
      url: 'http://localhost:4000/api-to-learn-staging/us-central1/api/',
      description: 'Local',
    },
  ],
};
