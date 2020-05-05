const express = require('express')
const app = express()
const requests = require('../model/handle')

app.post('/BMI',async(req,res)=>{
    try{
         var bmi = await new requests().BMIreq(req.body)
         res.json(bmi);
    }
     catch(error){
         res.send(error)
     }
 })
 module.exports = app