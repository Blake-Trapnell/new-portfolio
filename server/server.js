require('dotenv').config()
const express = require('express')
const{SERVER_PORT} = process.env
const PORT = SERVER_PORT || 4310
const app = express()
app.use(express.json())
app.use( express.static( `${__dirname}/../build` ) );

app.listen(PORT, ()=> console.log(PORT))