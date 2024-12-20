import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db= new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"ToDo List",
    password:"12390ssD",
    port:5432
})
const app=express();
const port=3000;
const LIST=[];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("view engine","ejs");
app.get('/',(req,res)=>{
    res.render("index.ejs",{List:LIST})
})
    
app.post('/submit',(req,res)=>{
    console.log(req.body);
    LIST.push(req.body["ToDoNumber1"])
    res.redirect("/");
    })
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})
