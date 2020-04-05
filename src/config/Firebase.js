import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBR6RFD-CghtzTGRZOh69Y_RRPk5tpzgJU",
    authDomain: "login-firebase-7d760.firebaseapp.com",
    databaseURL: "https://login-firebase-7d760.firebaseio.com",
    projectId: "login-firebase-7d760",
    storageBucket: "login-firebase-7d760.appspot.com",
    messagingSenderId: "531828519354",
    appId: "1:531828519354:web:be3a473d4da735c711ed83"
  };

  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
