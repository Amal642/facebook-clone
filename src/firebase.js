import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCkPaiqwTguzMl1gmi1XeDncIBuev1kz-c",
  authDomain: "facebook-clone-3ec90.firebaseapp.com",
  projectId: "facebook-clone-3ec90",
  storageBucket: "facebook-clone-3ec90.appspot.com",
  messagingSenderId: "474811587279",
  appId: "1:474811587279:web:17c47965389aaa779e75ba"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;