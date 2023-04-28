import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBUsJewmeZGNREJAfnfSKMTht2pUsJb13Y",
    authDomain: "tickets-9dc28.firebaseapp.com",
    projectId: "tickets-9dc28",
    storageBucket: "tickets-9dc28.appspot.com",
    messagingSenderId: "951848751215",
    appId: "1:951848751215:web:29e9541844cb074ee13d9a",
    measurementId: "G-2BWX5TCG81"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseApp);

  const db = getFirestore(firebaseApp);

  const storage = getStorage(firebaseApp);

  export {auth, db, storage };