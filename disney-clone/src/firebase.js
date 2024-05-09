import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCmyhV5UWZ_Qid6yJMxqqP6qVJWFcPE8_Y",
  authDomain: "disneyplus-clone-9c993.firebaseapp.com",
  projectId: "disneyplus-clone-9c993",
  storageBucket: "disneyplus-clone-9c993.appspot.com",
  messagingSenderId: "144260065971",
  appId: "1:144260065971:web:d763aad8eef08bebf5dec6",
  measurementId: "G-ZD1ETEMZCZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
