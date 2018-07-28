const router = require('express').Router();
const userRoutes = require('./users');
const scholarRoutes = require('./scholar');
const datesRoutes = require('./dates');
// const chapterRoutes = require('./chapters');
// const countryRoutes = require('./country');
const userController = require('../../controllers/usersController');

// User API routes
router.use('/users', userRoutes);

router.use('/scholar', userController.isLoggedIn, scholarRoutes);
router.use('/dates', userController.isLoggedIn, datesRoutes);
// router.use('/chapters', userController.isLoggedIn, chapterRoutes);
// router.use('/countries', countryRoutes);

module.exports = router;
