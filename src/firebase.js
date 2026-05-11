import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA77nRZGAHy9sqYslDI3vCDcFCiHW3wWhw",
  authDomain: "pretty-forge.firebaseapp.com",
  projectId: "pretty-forge",
  storageBucket: "pretty-forge.firebasestorage.app",
  messagingSenderId: "311215489533",
  appId: "1:311215489533:web:a65eb1464f4bbb5bda1994",
  measurementId: "G-7PZNX86HXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
