

var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyBCj0y1odwrbbMWshGFKvv90nUkqjy1rVw",
  authDomain: "datarepo-54200.firebaseapp.com",
  databaseURL: "https://datarepo-54200.firebaseio.com",
  storageBucket: "datarepo-54200.appspot.com",
  messagingSenderId: "67217946205"
};
firebase.initializeApp(config);

module.exports = firebase;