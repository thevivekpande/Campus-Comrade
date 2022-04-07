import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC0UT0EUYVsYWebwpvTcG-LlaIdmBqCRCs",
  authDomain: "quora-2cc0f.firebaseapp.com",
  projectId: "quora-2cc0f",
  storageBucket: "quora-2cc0f.appspot.com",
  messagingSenderId: "713658860064",
  appId: "1:713658860064:web:af7686965d05ae3adc7245",
 
  
};

/*
apiKey: "AIzaSyDG2mnrOkS0tafAjU1SqzXfaJS7AMKMSMg",
  authDomain: "quora-clone-akky.firebaseapp.com",
  projectId: "quora-clone-akky",
  storageBucket: "quora-clone-akky.appspot.com",
  messagingSenderId: "902318949999",
  appId: "1:902318949999:web:8df2b97a20eece0209ef9a",
  measurementId: "G-LJBYVXT22Z",

   apiKey: "AIzaSyDG2mnrOkS0tafAjU1SqzXfaJS7AMKMSMg",
  authDomain: "quora-clone-akky.firebaseapp.com",
  projectId: "quora-clone-akky",
  storageBucket: "quora-clone-akky.appspot.com",
  messagingSenderId: "902318949999",
  appId: "1:902318949999:web:8df2b97a20eece0209ef9a",
  measurementId: "G-LJBYVXT22Z",




*/

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
