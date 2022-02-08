const {Router} = require('express');
const router = Router();
const {home,nosotros} = require('../controllers/mainController')

router.get("/",home);
router.get("/nosotros",nosotros);

module.exports = router;