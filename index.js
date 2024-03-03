
const express = require('express')
const app = express()
require('dotenv').config()
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/rakshith",(req,res) =>{
    res.send("Learning Backend!!!!!")
})


app.get('/login',(req,res)=>{
    res.send("<h1>PLease learn here by logging in.</h1>")
})


app.get('/nandini',(req,res)=>{
    res.send("<h2>I love Chai Very Much</h2>")
})

app.listen(port = process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})