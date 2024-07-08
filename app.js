const express = require("express");
const connectToDB = require("./database/databaseConnection");
const Blog = require("./model/blogModel");
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectToDB();

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
    res.render("contact.ejs",{name})
})
app.get("/contact",(req,res)=>{
    // number = " you can call me on 9863873772"
    res.render("blog.ejs")
})
app.get("/blog",async(req,res)=>{
    const bodyy=await Blog.find({});
    console.log(bodyy)
    res.send("blog")
})
app.post("/blog",async(req,res)=>{
    const {title,content} = req.body
    // console.log(title)

    await Blog.create({
       title,content

    }
    )
    res.send("blog created")
})