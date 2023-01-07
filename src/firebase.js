import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAaNhy2kia6cDVz7lX8omBKjhCcUWlFfZc',
  authDomain: 'netflix-clone-f12c5.firebaseapp.com',
  projectId: 'netflix-clone-f12c5',
  storageBucket: 'netflix-clone-f12c5.appspot.com',
  messagingSenderId: '800046380985',
  appId: '1:800046380985:web:66e505399f095f79b12868',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
