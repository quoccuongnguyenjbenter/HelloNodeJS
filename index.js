// console.log("Hello NodeJS");
var express=require("express");
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var app=express();
app.listen(3000);
// app.get("/hello",function(req,res){
//     res.send("<font color=blue>Hello NodeJS, Phương thức GET</font>");
// });
app.set("view engine","ejs");
app.set("views","./views");
app.get("/khoapham",function(req,res){
    res.render("khoapham");
});
// app.post("/hello",function(req,res){
//     res.send("<font color=blue>Hello NodeJS, Phương thức POST</font>");
// });
app.post("/hello",urlencodedParser,function(req,res){
    var u=req.body.Username;
    var p=req.body.Password;
    res.send("Username: "+u+" và Password: "+p);
});
app.get("/tintuc/:id",function(req,res){
    var i=req.params.id;
    res.send("Server nhận được id= "+i);
});