import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD33_WnOOyDdjchHk_9lxP5IlescFtRIP8",
  authDomain: "bnp-paribas-dc025.firebaseapp.com",
  projectId: "bnp-paribas-dc025",
  storageBucket: "bnp-paribas-dc025.appspot.com",
  messagingSenderId: "115308313678",
  appId: "1:115308313678:web:1cf5d737dc9bda631b971f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;





//firebase.initializeApp(firebaseConfig);
//export default firebase