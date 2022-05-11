const {Router} = require('express');
const router = Router();
const {home,nosotros, search} = require('../controllers/mainController')

router.get("/",home);
router.get('/search', search);
router.get("/nosotros",nosotros);

module.exports = router;