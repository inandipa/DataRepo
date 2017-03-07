
var firebase = require('../firebase/firebase');

var express = require('express');
console.log('login.js');
var login = express.Router();

login.post('/',function (req,res) {
  var email = req.headers.email;
  var password = req.headers.password;


  console.log(req.headers);
  console.log(email +" "+ password);
  firebase.auth().signInWithEmailAndPassword(email, password).then(function (data) {
    console.log(data);
    res.json({status : 200 , message : "login succesfull " , "data" : data} )
  },function (error) {
    console.log(error);
    res.json({status : 200 , message : error.message , "error" : error} )
  })


});

module.exports = login;