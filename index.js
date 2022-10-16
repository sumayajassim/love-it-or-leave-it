const express = require("express");

const app = express();
const ejsLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(ejsLayouts);


app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000 , function(){
    console.log("Server started on port 3000"); 
})

