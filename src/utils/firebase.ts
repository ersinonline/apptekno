import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBUTqMQPaWvSEYq-kVR198Zgvp_ZZUX3So",
  authDomain: "superapp-37db4.firebaseapp.com",
  projectId: "superapp-37db4",
  storageBucket: "superapp-37db4.appspot.com",
  messagingSenderId: "488411585201",
  appId: "1:488411585201:web:51a3138f763f1842156090",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);