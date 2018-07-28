const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Dates
      .find({ user: req.user._id })
      // .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.Dates
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => db.Dates
    .create(Object.assign({}, req.body, { user: req.user }))
    .then((dbModel) => {
      db.User.update({ _id: req.user._id }, { $push: { datesRef: dbModel._id } })
        .then(() => res.json(dbModel))
        .catch(err => res.json({ error: err }));
    })
    .catch(err => res.status(422).json(err)),
  update: (req, res) => {
    db.Dates
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Dates
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
