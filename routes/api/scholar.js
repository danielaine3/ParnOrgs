const router = require('express').Router();
const scholarController = require('../../controllers/scholarController');

router.route('/')
  .get(scholarController.findAll)
  .post(scholarController.create);

router.route('/:id')
  .get(scholarController.findById)
  .put(scholarController.update)
  .delete(scholarController.remove);


module.exports = router;
