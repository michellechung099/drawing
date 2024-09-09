import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOKhxwfrTKRS2Y17IA7zxe4uFRShoQDl4",
  authDomain: "drawing-dc970.firebaseapp.com",
  projectId: "drawing-dc970",
  storageBucket: "drawing-dc970.appspot.com",
  messagingSenderId: "317448856748",
  appId: "1:317448856748:web:f0b70dccf64a694be26b09",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const db = getFirestore(app);

export { auth };
