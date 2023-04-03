const express = require('express');
var Router = require("routes")
var router = express.Router();
var bodyParser = require("body-parser")
var cookieParser = require("cookie-parser")
var mongoose = require("mongoose")
var session = require("express-session")
var cookieParser = require("cookie-parser")
var passport = require('passport')


var db = mongoose.connection;
router.use(cookieParser())

router.get('/', (req, res) => {
  res.render('index')
})

router.get("/sign_up", (req, res) => {
  res.render('registerpage');
});


router.get("/log_in", (req, res) => {
  res.render('loginpage');
})

router.get("/chatlive", (req, res) => {
  res.render('indexchat');
})


router.post("/log_in", (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var phno = req.body.phno;
  var password = req.body.password;

  var user = {
    "name": name,
    "email": email,
    "phno": phno,
    "password": password
  }

  db.collection('users').insertOne(user, (err, collection) => {
    if (err) {
      res.render('registerpage');
    }
    console.log("Record Inserted Successfully");
  });
  return res.render('loginpage');
})



router.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: true
}));





router.post("/home_in", async (req, res) => {
  try {

    const emails = req.body.email;
    const passwords = req.body.password;

    var useremail = await db.collection('users').findOne({ email: emails });

    if (useremail.password === passwords) {
      console.log(useremail)
      req.session.userdata = useremail._id
      console.log(req.session.userdata)
      res.render('homepage');
    } 
    else {
      res.send("invalid login details");
    }
  }
  catch (error) {
    res.status(400).send("invalid details")
  }
})



router.get('/logout', function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.render('loginpage');
    }
  });
});


// create isAuthenticated middleware function
function isAuthenticated(req, res, next) {
  if (req.session && req.session.userdata) {
    // if user is authenticated, continue to the next middleware or route handler
    return next();
  }
  // if user is not authenticated, redirect to login page
  res.redirect('/log_in');
}



router.get("/home_in", isAuthenticated, (req, res) => {


  res.render('homepage');
})





router.use(passport.initialize())
router.use(passport.session())





module.exports = router;

