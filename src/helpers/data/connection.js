import firebase from 'firebase/app';
import APIKeys from '../apiKeys.json';

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(APIKeys.firebaseConfig);
  }
};

export default firebaseApp;
