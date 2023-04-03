var express = require("express")
var bodyParser = require("body-parser")
var cookieParser = require("cookie-parser")
var mongoose = require("mongoose")
var http = require("http")
var app = express()
var morgan = require("morgan")
require('dotenv').config()
require('./passport-setup')
var passport = require('passport')
var data= require('./models/user')
var cors =require('cors')

app.use(cors())
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended:true
}))

const path =require('path')
 app.use(express.static(path.join(__dirname, "public")));





 

 const server = require('http').createServer();
 const io = require('socket.io')(server, {
  cors: {
    origin: ['http://localhost:8000']
  },
  transports: ['websocket', 'polling']
});
 
app.get('/path/to/socket.io-client.js', (req, res) => {
  console.log("okkmu")
return res.sendFile(__dirname + '/node_modules/socket.io-client/dist/socket.io.js');
});

 app.get('/socket.io/socket.io.js', (req, res) => {
  // console.log("okkmu")
 return res.sendFile(__dirname + '/node_modules/socket.io/client-dist/socket.io.js');
});


//  io.on('connection', (socket) => {
//    console.log('a user connected');
 
//    socket.on('disconnect', () => {
//      console.log('user disconnected');
//    });
 
//    // Emit a chat message to all connected clients
//    io.emit('chat message', 'Hello World');
//  });


var users = {};
io.on('connection', (socket) =>{
    console.log("listen chat");
    // If any new user joins, let other users connected to the server know!
    socket.on('new-user-joined', name =>{ 
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    // If someone sends a message, broadcast it to other people
    socket.on('send', message =>{
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
    });

    // If someone leaves the chat, let others know 
    socket.on('disconnect', message =>{
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
     });


 })




 server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});


 var serverRouter = require('./routes/server')
 app.set("view engine", "ejs")
 app.set('views', __dirname + '/views')
 app.set('models', __dirname + '/models')
 app.set('layout','layouts/layout')
 app.use('/',serverRouter)
 app.use('/sign_up',serverRouter)
 app.use('/log_in',serverRouter)
 app.use('/chatlive',serverRouter)

 


 
app.use(passport.initialize())
 
app.use(passport.session())
app.get('/google/homepage',(req,res)=>{
    res.redirect('/home_in')
})

app.get('/google',passport.authenticate('google',{scope:['email','profile']}));

app.get('/google/callback',passport.authenticate('google',{failureRedirect:'/failed'}),
 function(req,res){
    res.redirect('homepage')
 });


  
  

 


app.listen(8000,function(){
    console.log("Listening on PORT 8000");
});



















// // Node server which will handle socket io connections
// var {Server} = require("socket.io");
// // const cookieSession = require("cookie-session")
// // const{io} = require("socket.io.client");
// var io = new Server( http.createServer(app));
//     // cors:{
//     //     orgin:['http://localhost:5501']
//     // }
// // console.log(io);
   



// var users = {};
// io.on('connection', (socket) =>{
//     console.log("listen chat");
//     // If any new user joins, let other users connected to the server know!
//     socket.on('new-user-joined', name =>{ 
//         users[socket.id] = name;
//         socket.broadcast.emit('user-joined', name);
// //     });

// //     // If someone sends a message, broadcast it to other people
// //     socket.on('send', message =>{
// //         socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
// //     });

// //     // If someone leaves the chat, let others know 
// //     socket.on('disconnect', message =>{
// //         socket.broadcast.emit('left', users[socket.id]);
// //         delete users[socket.id];
//      });


//  })




