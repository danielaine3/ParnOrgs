const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Scholars
      .find({ user: req.user._id })
      // .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.Scholars
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => db.Scholars
    .create(Object.assign({}, req.body, { user: req.user }))
    .then((dbModel) => {
      db.User.update({ _id: req.user._id }, { $push: { scholarRef: dbModel._id } })
        .then(() => res.json(dbModel))
        .catch(err => res.json({ error: err }));
    })
    .catch(err => res.status(422).json(err)),
  update: (req, res) => {
    db.Scholars
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Scholars
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};