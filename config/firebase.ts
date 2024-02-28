import 'dotenv/config';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import FirebaseConfig from '../src/common/interfaces/firebase-config';

const firebaseConfig: FirebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY ?? '',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN ?? '',
    projectId: process.env.FIREBASE_PROJECT_ID ?? '',
    storageBucket: process.env.FIREBASE_STORE_BUCKET ?? '',
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID ?? '',
    appId: process.env.FIREBASE_APP_ID ?? '',
    measurementId: process.env.FIREBASE_MEASUREMENT_ID ?? ''
};

export const firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebase);
