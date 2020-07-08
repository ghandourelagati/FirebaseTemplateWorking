/* eslint-disable prettier/prettier */
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCIBEbYb2UOxDMofR9tn2HbbKDCh95zwPg',
  authDomain: 'fir-intro-68291.firebaseapp.com',
  databaseURL: 'https://fir-intro-68291.firebaseio.com',
  projectId: 'fir-intro-68291',
  storageBucket: 'fir-intro-68291.appspot.com',
  messagingSenderId: '523523950519',
  appId: '1:523523950519:web:aa1f8254bab872a8550a32',
  measurementId: 'G-JCX5BBGHPH',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
