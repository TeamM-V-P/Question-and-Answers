const router = require('express').Router();
const db = require('../db/mongoose.js');

router.route('/api/questions/:id')
  .get((req, res) => {
    db.question.find({itemId: req.params.id})
      .then((results) => {
        res.send(results);
        console.log('questions sent');
      })
      .catch((err) => {
        res.send(err);
        console.error(err);
      });
  })
  .post((req, res) => {
    db.question.create(req.body)
      .then(() => {
        console.log('posted new question');
        res.end()
      })
      .catch((err) => {
        res.send(err);
      })
  })
  .delete((req, res) => {
    db.question.deleteMany({})
      .then(() => {
        console.log('questions deleted');
        res.status(200).end();
      })
      .catch((err) => {
        console.error(err);
        res.status(400).end();
      })
  })
  .put();

  router.route('/api/answers/:id')
  .get((req, res) => {
    db.answer.find({questionId: req.params.id})
      .then((results) => {
        res.send(results);
        console.log('answers sent');
      })
      .catch((err) => {
        res.send(err);
        console.error(err);
      });
  })
  .post((req, res) => {
    db.answer.create(req.body)
      .then(() => {
        console.log('posted new answer');
        res.status(200).end()
      })
      .catch((err) => {
        res.send(err);
      })
  }).delete((req, res) => {
    db.answer.deleteMany({})
      .then(() => {
        console.log('answers deleted')
        res.status(200).end()
      })
      .catch((err) => {
        console.error(err)
        res.status(400).end()
      })
  })
  .put();


module.exports = router;