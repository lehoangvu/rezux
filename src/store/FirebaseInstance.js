import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBNiaBVWEvAg1HnN_XBlo70ATLT0ef6gJ0",
    authDomain: "luminous-heat-3458.firebaseapp.com",
    databaseURL: "https://luminous-heat-3458.firebaseio.com",
    storageBucket: "luminous-heat-3458.appspot.com",
    messagingSenderId: "635828897166"
}; 

firebase.initializeApp(config);


export default firebase;