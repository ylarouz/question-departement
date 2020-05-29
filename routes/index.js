var express = require('express');
var router = express.Router();
const fs = require('fs');

const data = fs.readFileSync('que.json');
let json = JSON.parse(data);

/* GET home page. */
router.get('/question', function(req, res, next) {
  res.render('questions',{json});
});


router.post('/question',(req, res)=>{
  var bq = req.body;
  json.push(bq);
  const data =JSON.stringify(json);
  fs.writeFileSync('que.json', data, 'utf-8');
  res.redirect('/question');
})


module.exports = router;
