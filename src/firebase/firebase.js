import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyAmSK7U0FCO3U0jHNu8_jc_Q2jE8g7ZxHg",
  authDomain: "tarot-1e80b.firebaseapp.com",
  databaseURL: "https://tarot-1e80b.firebaseio.com",
  projectId: "tarot-1e80b",
  storageBucket: "tarot-1e80b.appspot.com",
  messagingSenderId: "52728076592"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
