const router = require('express').Router();
const datesController = require('../../controllers/datesController');

router.route('/')
  .get(datesController.findAll)
  .post(datesController.create);

router.route('/:id')
  .get(datesController.findById)
  .put(datesController.update)
  .delete(datesController.remove);


module.exports = router;
