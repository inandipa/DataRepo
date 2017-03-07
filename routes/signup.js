
var firebase = require('../firebase/firebase');

var express = require('express');
console.log('signup.js');
var signup = express.Router();

signup.post('/',function (req,res) {
  var email = req.headers.email;
  var password = req.headers.password;


  console.log(req.headers);
  console.log(email +" "+ password);

  firebase.auth().createUserWithEmailAndPassword(email, password).then(function (data) {
    console.log(data);
    res.json({status : 200 , message : "user succesfull created" , "data" : data} )
  },function (error) {
    console.log(error);
    res.json({status : 200 , message : error.message , "error" : error} )
  })

});

module.exports = signup;