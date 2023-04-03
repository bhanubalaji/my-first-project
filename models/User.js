
var mongoose = require("mongoose")


mongoose.connect('mongodb://127.0.0.1:27017/bhanu',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))


module.exports =  mongoose;










































// var mongoose = require("mongoose")

// mongoose.connect('mongodb://127.0.0.1:27017/bhanu',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// var db = mongoose.connection;

// db.on('error',()=>console.log("Error in Connecting to Database"));
// db.once('open',()=>console.log("Connected to Database"))

// const userSchema = mongoose.Schema({
//     email:{
//         type:String,
//         unique:true,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })
// userSchema.pre("save", function(next){
//     if(!this. is Modified("password")){
//         return next()
//     }
//     this.password = bcrypt.hashSync(this.password,10)
//     next()
// })


// const userModel = mongoose.model("user",userSchema)
// module.exports = userModel
