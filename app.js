const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


var items = [];


app.get("/",function(req, res){
    res.render("list",{newListItem:items});
});

app.post("/",function(req,res){
    const item = req.body.title ;
    items.push(item); 
    res.redirect("/");
});



app.listen(3000, function(){
    console.log("Server started on port 3000");
})