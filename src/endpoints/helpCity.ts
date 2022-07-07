import * as HelpCity from '@app/actions/helpCity';

const prefixRoute = '/help-city';

const routes = [
  {
    method: 'GET',
    path: '/',
    description: 'get the hello world',
    ...HelpCity.create,
  },
  {
    method: 'GET',
    path: '/download-pdf',
    description: 'Download one web page as pdf',
    ...HelpCity.downloadPDF,
  },
];

export default {
  prefixRoute,
  routes,
};
