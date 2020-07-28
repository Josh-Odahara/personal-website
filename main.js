var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");


app.get("/", function(req,res){
	res.render("home");
});

app.get("/about", function(req,res){
	res.render("about");
});

app.get("/pics", function(req,res){
	res.render("pics");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Site is up and running!")
});