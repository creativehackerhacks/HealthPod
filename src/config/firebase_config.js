import firebase from 'firebase';

const fireConfig = {
    apiKey: "AIzaSyDOxCu5Vl-BzTFHQQLcpqQgtSf1Ad7obIk",
    authDomain: "scrapy-5fbe2.firebaseapp.com",
    projectId: "scrapy-5fbe2",
    storageBucket: "scrapy-5fbe2.appspot.com",
    messagingSenderId: "166344927565",
    appId: "1:166344927565:web:c27fbb3b52c67099deef04",
    measurementId: "G-F1DF07B97R"
};

try {
    firebase.initializeApp(fireConfig);
} catch (err) {
    if(!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack);
    }
}

const firebaseConfig = firebase;
export default firebaseConfig;