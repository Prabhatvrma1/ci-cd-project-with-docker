const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) =>{
    res.send("hellow world");
})

app.listen(3001, () =>{
    console.log("connection is listening at port 3001");
})