

var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth2').Strategy
console.log("true")
passport.serializeUser(function(user,done){
    done(null,user);
});

passport.deserializeUser(function(user,done){
    done(null,user);
});

passport.use(new GoogleStrategy({
   clientID:process.env.GOOGLE_CLIENT_ID,
   clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:process.env.GOOGLE_CALLBACK_URL,
   passReqToCallback:true
   
},function(request,accessToken,refreshToken,profile,done){
   console.log(profile)
    console.log("tru")
    return done(null,profile)
}
))