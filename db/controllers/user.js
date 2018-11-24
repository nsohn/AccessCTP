const express = require('express');
const router = express.Router();
const models = require('../models');

router.post('/', (req, res) => {
  const data = req.body;
  models.User.create({
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    password: data.password
  }).then((data) => { // could be then instead
    res.json({
      statusCode: 200,
      msg: 'success'
    })
  }).catch((err) => {
    res.json({
      statusCode: 400,
      msg: 'noooo'
    })
  })
})

module.exports = router;
