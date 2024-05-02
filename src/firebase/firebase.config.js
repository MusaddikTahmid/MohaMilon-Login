// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdeljHw5d2SquzsTYoikHgN2sLBqDn6xk",
  authDomain: "auth-moha-milon-e92e5.firebaseapp.com",
  projectId: "auth-moha-milon-e92e5",
  storageBucket: "auth-moha-milon-e92e5.appspot.com",
  messagingSenderId: "578598045843",
  appId: "1:578598045843:web:1bb0008b250c678b18a566",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
