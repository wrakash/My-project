const express = require('express');
const bodyParser =require('body-parser')

const app = express();

app.get("/", function(req,res){
      res.send("welcome to my website"); 
});

app.use(bodyParser.urlencoded({extended:true} ));

app.get("/about", function(req,res){
      res.send("<h1>My name is Akash kumar</h1>"); 
});

app.get("/calculator", function(req,res){
      res.sendFile(__dirname + "/index.html"); 
});

app.post("/calculator", function(req,res){
      console.log(req.body)
      let n1 = Number(req.body.v1);
      let n2 = Number(req.body.v2);
      let sum = n1 + n2;

      res.send('The sum of two entered no = ' +sum); 
});


app.get("/contact", function(req,res){
      res.send("My email address : akashkumargoyal2221@gmail.com"); 
});

app.listen(6000, function(req, res){
        console.log("server is running at port no: 6000");
});