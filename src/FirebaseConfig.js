import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB08DHhSL670nElBNu4v76wKA3dmvOWUoQ",
  authDomain: "medicalforu-11519.firebaseapp.com",
  projectId: "medicalforu-11519",
  storageBucket: "medicalforu-11519.appspot.com",
  messagingSenderId: "360949789491",
  appId: "1:360949789491:web:4e23d9d486157f7b888446",
  measurementId: "G-QMW2QLGX45"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
