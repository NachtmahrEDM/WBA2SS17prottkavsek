'use strict'

var express = require('express');
var pug = require('pug')
var app = express();

app.set('view engine', 'pug');
app.set("views", "html_template/");

app.use('/style',express.static('style'));

var testString = "Alex DeLarge";

app.get("/de", function(req, res){
  res.render("base.pug", {
      title: "Cocktails Orange",
      message: testString
  });
});

app.get("/cocktail/:cocktail", function(req, res) {

  // PLACEHOLDER
  var desq = "Ein Cocktail, der es in sich hat. Lorde Lorde Lorde!"
  var name = "Gin Tonic"

  res.render("cocktail.pug", {
    title: req.params.cocktail,
    cocktail: name,
    description: desq
  });
});

app.listen(3000, function(){
  console.log("App is listening on Port 3000...");
});
