import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBK6mXxWNuC64zPHWveffD2E9pVAGjSWiQ",
    authDomain: "accessories-f453e.firebaseapp.com",
    projectId: "accessories-f453e",
    storageBucket: "accessories-f453e.appspot.com",
    messagingSenderId: "304132302899",
    appId: "1:304132302899:web:f0550be5ce0d100d085b46",
    databaseURL:"https://accessories-f453e-default-rtdb.firebaseio.com/"
};

 const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)
