import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAqlRNr2dG89OKFXe99M_HylwnGACzgF8Q",
    authDomain: "che-chef.firebaseapp.com",
    databaseURL: "https://che-chef.firebaseio.com",
    projectId: "che-chef",
    storageBucket: "che-chef.appspot.com",
    messagingSenderId: "694293531512",
    appId: "1:694293531512:web:3a4b02de8a6a3c86f7568d",
    measurementId: "G-E0VGQWQRZS"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }