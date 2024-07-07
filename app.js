const express = require("express");
const app = express();

app.listen(3000,()=>{
    console.log("nodejs has started"+3000);
})
app.get("/",(req,res)=>{
    console.log(req);
    res.send("<h1></h1> haha, this is about page</h1>");
})
app.set('view engine','ejs')
app.get("/about",(req,res)=>{
    name = "apeksha parajuli"
    res.render("about.ejs",{name})
})
app.get("/contact",(req,res)=>{
    number = " you can call me on 9863873772"
    res.render("contact.ejs",{number})
})