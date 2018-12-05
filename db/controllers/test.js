const express = require('express');
const router = express.Router();
const models = require('../models');


router.post('/addTest', (req,res) => {
  const data = req.body;
  models.Test.create({
    course_number: data.course_number,
    prof_name: data.prof_name,
    email: data.email,
    exam_start: data.exam_start,
    exam_end: data.exam_end,
    validated: data.validated,
    confirmed: data.confirmed
  }).then((data) => {
    res.json({ msg: "test created" });
  }).catch(() => {
    res.status(400).json({ msg: "error creating test" });
  });
});

router.get('/tests', function(req, res ){
    models.Test.findAll()
    .then((tests) => {
    res.json(tests)
    })
    .catch((err) => {res.status(401).json(err)})
})

module.exports = router;
