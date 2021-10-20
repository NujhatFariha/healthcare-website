import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initializeFirebaseApp = () => {
  initializeApp(firebaseConfig);
};

export default initializeFirebaseApp;