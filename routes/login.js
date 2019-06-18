var express = require('express');
var router = express.Router();

/* log in no sistema *****************************************************************************/
router.get('/', function(req, res){
    res.render('index', {message: null});
});
router.post('/',function(req, res, next){
        var password = req.body.password;

        //teste
        if(password == "#euvou"){
            res.render('convite', { snackbar: 'Bem vindo!' });
        }else{
            res.render('index', { snackbar: 'Codigo de acesso invalido' });
        }
    }
);

module.exports = router;