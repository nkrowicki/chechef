import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDoiUQkVN9c8qDCbnlNcwGwFkjvsx1ibbY",
    authDomain: "checheff-7cd78.firebaseapp.com",
    databaseURL: "https://checheff-7cd78.firebaseio.com",
    projectId: "checheff-7cd78",
    storageBucket: "checheff-7cd78.appspot.com",
    messagingSenderId: "681192043366",
    appId: "1:681192043366:web:e185410e13109732fccea7"
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