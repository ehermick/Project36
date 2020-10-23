import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAU6nmbcFcyhjuxVN4yirqFEblPNtppVzU",
    authDomain: "clone-3a7f5.firebaseapp.com",
    databaseURL: "https://clone-3a7f5.firebaseio.com",
    projectId: "clone-3a7f5",
    storageBucket: "clone-3a7f5.appspot.com",
    messagingSenderId: "920332012634",
    appId: "1:920332012634:web:0a2a49f745452847bb5c63",
    measurementId: "G-HGFP2LDXP9",
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database=firebaseApp.firestore();
  export default database;