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
    confirmed: data.confirmed,
    date: data.date
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
router.post('/validateTest', (req,res) => {
  models.Test.findById(req.body.test_id)
  .then((test) => {
    test.update({
      validated: true
    })
    .then((updatedTest) => {
      res.json({ test: updatedTest, msg: "test validated" });
    }).catch(() => {
      res.status(400).json({ msg: "error creating test" });
    })
  }).catch(() => {
    res.status(400).json({ msg: "error creating test" });
  })
})
router.post('/deleteTest', (req,res) => {
  models.Test.findById(req.body.test_id)
  .then((test) => {
    test.update({
      validated: true
    })
    .then((updatedTest) => {
      res.json({ test: updatedTest, msg: "test validated" });
    }).catch(() => {
      res.status(400).json({ msg: "error creating test" });
    })
  }).catch(() => {
    res.status(400).json({ msg: "error creating test" });
  })
})
router.post('/confirmTest', (req,res) => {
  models.Test.findById(req.body.test_id)
  .then((test) => {
    test.update({
      confirmed: true
    })
    .then((updatedTest) => {
      res.json({ test: updatedTest, msg: "test confirmed" });
    }).catch(() => {
      res.status(400).json({ msg: "error confirming test" });
    })
  }).catch(() => {
    res.status(400).json({ msg: "error confirming test" });
  })
})

module.exports = router;
