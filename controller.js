
//import favourite schema

const path = require('path');
var bodyParser = require('body-parser');






exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle: 'Mathew Seal',
        path: '/'
    })

}
