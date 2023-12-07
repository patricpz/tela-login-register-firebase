
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDs0ZLbRWvSoU_kU5JiR75Xydpvl5rpzxw",
  authDomain: "react-auth-7ef5c.firebaseapp.com",
  projectId: "react-auth-7ef5c",
  storageBucket: "react-auth-7ef5c.appspot.com",
  messagingSenderId: "894398171268",
  appId: "1:894398171268:web:5624f5c467dc84d4555ad1"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);