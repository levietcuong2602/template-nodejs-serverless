const router = require('express').Router();
const asyncMiddleware = require('../middlewares/wrapAsync');
const helloController = require('../controllers/hello');

router.get('/hello', asyncMiddleware(helloController.hello));

router.get('/hi', asyncMiddleware(helloController.sayHi));

module.exports = router;
