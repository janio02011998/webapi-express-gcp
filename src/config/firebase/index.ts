import firebaseAdmin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

import credentialsStaging from './credentials-staging.json';

const serviceAccount = credentialsStaging as firebaseAdmin.ServiceAccount;

const app = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

const Firestore = getFirestore(app);

export { Firestore };
