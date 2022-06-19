import { initializeApp, getApps, getApp } from 'firebase/app';
import * as firestore from 'firebase/firestore';
import * as Auth from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCROriTPY3olrCejsOgqqyNRWCvnecn_Jc",
  authDomain: "signalapp-982ce.firebaseapp.com",
  projectId: "signalapp-982ce",
  storageBucket: "signalapp-982ce.appspot.com",
  messagingSenderId: "489793750442",
  appId: "1:489793750442:web:647ef659e37b0f44f457d3",
  measurementId: "G-FTD4RMM1GL"
};

let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const fs = firestore.initializeFirestore(app, { experimentalForceLongPolling: true });
const db = firestore;
const auth = Auth;

export { fs, db, auth };