import * as functions from 'firebase-functions';
import * as httpFunctions from '~/functions/http';

/**
 * API functions
 */
export const api = functions
  .runWith({ memory: '2GB', timeoutSeconds: 540 })
  .https.onRequest(httpFunctions.api);
