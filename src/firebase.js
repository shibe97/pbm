import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import clientCredentials from './credentials/client';

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;
