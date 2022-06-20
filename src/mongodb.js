
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/srishti');
var db=mongoose.connection;
db.once('open',()=>console.log("we are connected to srishti db"));
db.on('error',console.error.bind(console,'connection error..'));
// var authenticationSchema=new mongoose.Schema({
//     username:{type:String, required:true,unique:true},
//     email:{type:String,required:true},
//     password:{type:String,required:true}
// });
// var postSchema=new mongoose.Schema({
//     content:{type:String,required:true},
//     createdOn:{type:Date,default:new Date()},
//     createdBy:{type:String,required:true}
// })

// module.exports={
//     authdetails:mongoose.model('authDetails',authenticationSchema),
//     posts:mongoose.model('posts',postSchema)
// };
// src:`${logo8}`,
// name:"ladies jacket",
// colour:"black ",
// brand:"zara",
// rating:"4.8",
// price:2290 
var MenproductsSchema=new mongoose.Scheme({
    src:String,
    name:String,
    colour:String,
    brand:String,
    rating:Number,
    price:Number
});
// var menproducts=mongoose.model('menproducts',MenproductsSchema);

 