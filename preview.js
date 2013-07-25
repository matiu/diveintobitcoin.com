var express=require("express");
var http=require("http");


var app=express();

app.set("port", process.env.PORT || 3000);
app.use(app.router);
app.use(express.static(__dirname+"/public"));

http.createServer(app).listen(app.get("port"), function(){
  console.log("Express server listening on port " + app.get("port"));
});

