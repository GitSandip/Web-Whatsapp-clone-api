import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import Connection from './database/db.js';
// const express = require('express');
import Route from './routes/route.js'


const app=express()

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(cors());
app.use('/',Route);

Connection();
const PORT=8000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
});