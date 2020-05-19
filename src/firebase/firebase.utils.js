import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { myAPI } from './config';


const config = {
  apiKey: myAPI,
  authDomain: "crown-db-16b30.firebaseapp.com",
  databaseURL: "https://crown-db-16b30.firebaseio.com",
  projectId: "crown-db-16b30",
  storageBucket: "crown-db-16b30.appspot.com",
  messagingSenderId: "847800204402",
  appId: "1:847800204402:web:cf640fc901f4c5d8b2d6eb",
  measurementId: "G-0J47FRWB7S"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
