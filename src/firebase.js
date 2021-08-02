import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1_gH0VGsDznraE_G8M0lfMpx_1T0Sw5A",
    authDomain: "discoord-f18aa.firebaseapp.com",
    projectId: "discoord-f18aa",
    storageBucket: "discoord-f18aa.appspot.com",
    messagingSenderId: "717477525884",
    appId: "1:717477525884:web:1a01469c2ff4586f034cf9",
    measurementId: "G-CH702XXMGV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider };
  export default db;