// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTGebOBv_rB5Hd5cAUZOuh4jSORv3W-LQ",
  authDomain: "brand-shop-e81ca.firebaseapp.com",
  projectId: "brand-shop-e81ca",
  storageBucket: "brand-shop-e81ca.appspot.com",
  messagingSenderId: "980341414324",
  appId: "1:980341414324:web:82296f7f0ca369f730bae1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth