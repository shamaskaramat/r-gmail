import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCiMswlvwkddMeVGhZLc131Nph1QPiUTFU",
  authDomain: "fir-68bd0.firebaseapp.com",
  projectId: "fir-68bd0",
  storageBucket: "fir-68bd0.appspot.com",
  messagingSenderId: "677697045223",
  appId: "1:677697045223:web:a34359374519cbfadf1842"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {db,auth,provider};