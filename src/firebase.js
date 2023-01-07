import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
 import  'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAPXVsYfbs_k4qJsRX9XYELtHnKVrLf_KU",
    authDomain: "disney-clone-2f293.firebaseapp.com",
    projectId: "disney-clone-2f293",
    storageBucket: "disney-clone-2f293.appspot.com",
    messagingSenderId: "724660236167",
    appId: "1:724660236167:web:9581110827a7c244c9ed22",
    measurementId: "G-JM8N6TF1J1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;