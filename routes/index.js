var express = require('express');
var router = express.Router();

/* carregar informações da pagina inicial ********************************************************************************/
router.get('/', function(req, res, next) {



  res.render('index', { snackbar: null });
});

module.exports = router;
