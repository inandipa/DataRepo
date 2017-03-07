
var firebase = require('../firebase/firebase');

var express = require('express');
console.log('home.js');
var home = express.Router();

home.post('/',function (req,res) {
  var uid = req.headers.uid;
  var data = req.body;
  console.log(uid);
  console.log(data);

  firebase.database().ref("/"+uid).set(data);
  res.json({status : 200 , message : "Data sored Succesfully"} );

});

home.get('/',function (req,res) {
  var uid = req.query.uid;
  console.log(uid);
  if(uid == undefined || uid == null ||uid == ""){
    res.json({status:200 , message: "invalid user", error: "invalid request"})
  }

  var userRef = firebase.database().ref("/" + uid);

  userRef.on('value', function (snapshot) {
    console.log(snapshot.val());
    res.json(snapshot.val());
  });
});
module.exports = home;