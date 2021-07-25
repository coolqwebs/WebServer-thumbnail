const express = require('express')

let app = express()

app.listen(3000)

let counter = 0
app.get('/', (req,res)=>{
    counter++
    res.send({counter})
}) 