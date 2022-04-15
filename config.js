import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyACNznRBSPxAKhhVVmljWfJNxW4ox5OtRA",
    authDomain: "p67v3-42758.firebaseapp.com",
    databaseURL: "https://p67v3-42758-default-rtdb.firebaseio.com",
    projectId: "p67v3-42758",
    storageBucket: "p67v3-42758.appspot.com",
    messagingSenderId: "642908604799",
    appId: "1:642908604799:web:e763e671f05dcab7e0724a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();