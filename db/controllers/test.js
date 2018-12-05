const express = require('express');
const models = require('../models');

const router = express.Router();
const Test = models.Test;

router.post('/addTest', (req,res) => {
  Test.create({
    course_number: req.body.course_number,
    prof_name: req.body.prof_name,
    email: req.body.email,
    exam_start: req.body.exam_start,
    exam_end: req.body.exam_end
  }).then((test) => {
    res.json({ msg: "test created" });
  }).catch(() => {
    res.status(400).json({ msg: "error creating test" });
  });
});
