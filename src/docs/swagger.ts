const info = {
  title: 'API',
  description: 'API to learn about new stacks',
  contact: {
    email: 'janiocarvalhojr@gmail.com',
  },
  version: '0.0.1',
};

export default {
  info,
  openapi: '1.0.0',
  servers: [
    {
      url: 'http://localhost:4000/api-to-learn-staging/us-central1/api/',
      description: 'Local',
    },
  ],
};
