import express from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render("index.ejs")
})
// app.get('/',(req,res)=>{
//     res.render("index.ejs")
// })
app.post('/submit',(req,res)=>{
    res.render("index.ejs",{Number1:req.body["ToDONumber1"],Number2:req.body["ToDoNumber2"],text:req.body["Textarea"]})
})

app.listen(port,()=>{
    console.log(`Litsening at port ${port}`);
    
})