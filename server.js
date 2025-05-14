const express=require("express")
const app =express()
app.use(express.json())
const PORT=3001

app.get('/',(req,res)=>{
    res.send("Welcome to the server")
})

app.post('/login',(req,res)=>{
    const {Email,Password}=req.body
    if (!Email){
        res.status(400).json({message:"Email cannot be empty"})
    }
    if(!Password){
        res.status(400).json({message:"Password cannot be empty"})
    }
    res.status(200).json({message:"Succesful login",data:req.body})
    
});

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})