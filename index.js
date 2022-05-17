const express = require('express');

const app = express()

PORT = 2000

app.use(express.static('public'))


app.listen(PORT, () =>{
    console.log("port is running at 2000")
})