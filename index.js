let exp = require('express')
let parser=require('body-parser')
let app = exp();


app.use(parser.json());
app.use(parser.urlencoded());

app.get("/",(req,res)=>{
    res.send("Welcome")
}
)


app.get('/form-data',(req,res)=>{
    console.log("g")
    let a=req.query.name
    let b=req.query.number
    res.status(200).send({msg:"ok",data:{name:a,number:b}})
})

app.post('/postform',(req,res)=>{
    let {username, password}=req.body
    res.send({msg:"welcome", data:{uname:username,pass:password}})
})  




app.listen(4525,()=>{console.log("Running")});  