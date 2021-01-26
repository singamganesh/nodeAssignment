var express = require('express');
var router = express.Router();
var mongoUser   = require('../Model/mongoModel');
/* GET home page. */

router.get('/', function(req, res, next) {

 res.send("I'm running.");

});
router.get('/get-records', function(req, res, next) {

  mongoUser.find({},(err,docs)=>{
    if (!err) { 
     // console.log(docs);
      res.json(docs);
      return;
  }
  else {
      throw err;
  }
  })
 

});

router.post('/set-record',(req,res)=>{

  //Use here Mongo-db for add in database.
  
  let userData = {
    "name":req.body.name,
    "email":req.body.email
  }

  let data = new mongoUser(userData);
  data.save((err,user)=>{
    console.log(user);
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ err: err });
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({ success: true, status: 'Your Data Added Successfully' });
  })

  res.status(200).json(userData);
})
module.exports = router;
