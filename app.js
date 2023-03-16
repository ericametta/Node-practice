const express = require('express');

const app = express();


app.get('./about',(req, res) => {
    res.sendFile(".views/about.html")

});