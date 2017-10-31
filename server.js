var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/',function(req, res){
 concat("String 1", req.body.anydata).then(function(result){
   res.send(result);
 });
})

function concat(str1,str2){
  var result = str1+str2;
  return Promise.resolve(result);
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})