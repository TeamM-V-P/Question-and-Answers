/* eslint-disable no-console */
const router = require('express').Router();
const db = require('../db/mongoose.js');

router.route('/questions/:id')
  .get((req, res) => {
    db.question.find({ itemId: req.params.id })
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
        res.end();
      })
      .catch((err) => {
        res.send(err);
      });
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
      });
  })
  .put((req, res) => {
    db.question.findOneAndUpdate({ questionId: req.params.id }, req.body)
      .then(() => {
        console.log('updated item');
        res.status(200).end();
      })
      .catch((err) => {
        console.error(err);
        res.status(400).end();
      });
  });

router.route('/answers/:id')
  .get((req, res) => {
    db.answer.find({ questionId: req.params.id })
      .then((results) => {
        console.log('answers sent');
        res.status(200).send(results);
      })
      .catch((err) => {
        console.error(err);
        res.status(400).send(err);
      });
  })
  .post((req, res) => {
    db.answer.create(req.body)
      .then(() => {
        console.log('posted new answer');
        res.status(200).end();
      })
      .catch((err) => {
        res.send(err);
      });
  });

router.route('/answer/:id')
  .get((req, res) => {
    db.answer.find({ answerId: req.params.id })
      .then((results) => {
        console.log('answers sent');
        res.status(200).send(results);
      })
      .catch((err) => {
        console.error(err);
        res.status(400).send(err);
      });
  })
  .delete((req, res) => {
    db.answer.findOneAndDelete({ answerId: req.params.id })
      .then(() => {
        console.log('answers deleted');
        res.status(200).end();
      })
      .catch((err) => {
        console.error(err);
        res.status(400).end();
      });
  })
  .put((req, res) => {
    db.answer.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(() => {
        console.log('updated item');
        res.status(200).end();
      })
      .catch((err) => {
        console.error(err);
        res.status(400).end();
      });
  });

router.route('/questions/')
  .get((req, res) => {
    db.question.find({})
      .then((results) => {
        res.send(results);
        console.log('questions sent');
      })
      .catch((err) => {
        res.send(err);
        console.error(err);
      });
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
      });
  });

router.route('/answers/')
  .get((req, res) => {
    db.answer.find({})
      .then((results) => {
        console.log('answers sent');
        res.status(200).send(results);
      })
      .catch((err) => {
        console.error(err);
        res.status(400).send(err);
      });
  }).delete((req, res) => {
    db.answer.deleteMany({})
      .then(() => {
        console.log('answers deleted');
        res.status(200).end();
      })
      .catch((err) => {
        console.error(err);
        res.status(400).end();
      });
  });

module.exports = router;
