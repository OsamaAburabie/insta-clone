var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const {OAuth2Client} = require("google-auth-library");  
const { response } = require('../app');
// const bcrypt = require('bcrypt')

const client = new OAuth2Client("592820929348-c7c385j5ivcrus96fle4cnanmtkvho38.apps.googleusercontent.com");

// ======================
const base = new mongoose.Schema({
  username: {
      type: String,
      required: true
  }, 
  email: {
      type: String,
      required: true
  },
  password: {
      type: String,
  }
});
const signUpTemplateCopy = mongoose.model('users', base);


router.post('/Login', function(req, res, next) {
  signUpTemplateCopy.findOne({"username" : req.body.username},(err, r)=> {
    if (err) throw err;
    if (!r){
      res.send("user not found");
    }
    else if (r.password ==  req.body.password){
      res.send("done");
    }
    else{
      res.send("wrong password");
    }
  } )
});
router.post('/GoogleLogin', function(req, res) {
  const {tokenId} = req.body;
  client.verifyIdToken({idToken : tokenId, audience:"592820929348-c7c385j5ivcrus96fle4cnanmtkvho38.apps.googleusercontent.com"}).then(response =>{
    signUpTemplateCopy.findOne({username : response.payload.sub},function(err, r) {
      if (err) throw err;
      console.log(r);
      if (r){
        res.send("user already registered");
      }
      else{
        const signedUpUser = new signUpTemplateCopy({
          username: response.payload.sub,
          email: response.payload.email,
      });
    
      signedUpUser.save()
          .then(data => {
              res.json(data)
          })
          .catch(error => {
              res.json(error)
          });
      }
    })
  })
});


router.post('/signup', (req, res) => {
  // const saltPassword = await bcrypt.genSalt(10);
  // const securePassword =  await bcrypt.hash(req.body.password, saltPassword);
  signUpTemplateCopy.findOne({username : req.body.username},function(err, r) {
    if (err) throw err;
    console.log(r);
    if (r){
      res.send("user already registered");
    }
    else{
      const signedUpUser = new signUpTemplateCopy({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
  
    signedUpUser.save()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.json(error)
        });
    }
  })
});

module.exports = router;
