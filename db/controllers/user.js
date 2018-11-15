const express = require('express');
const router = express.Router();
const models = require('../models');

router.post('/', (req, res) => {
  const data = req.body;
  models.User.create({
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email
  })
  .complete((err)=> {
    if (err){
      console.log('error');
    } else{
      console.log('saved');
    }
  })


  console.log(req.body);
  console.log('Arrived at user');
  res.json({
    statusCode: 200,
    msg: 'success'
  })
})

module.exports = router;
