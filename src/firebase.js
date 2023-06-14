// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhkwurlJhYbRcVVB4byBf9InYVBY8E2aA",
  authDomain: "mytestreactapp-6a9d2.firebaseapp.com",
  projectId: "mytestreactapp-6a9d2",
  storageBucket: "mytestreactapp-6a9d2.appspot.com",
  messagingSenderId: "449754067644",
  appId: "1:449754067644:web:80e36b3fc8eb8f58b216b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;