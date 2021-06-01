
//import favourite schema

const path = require('path');
var bodyParser = require('body-parser');






exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle: 'Mathew Seal',
        path: '/'
    })

}
exports.getSearch = (req, res, next) => {


}




// exports.postShare = (req, res, next) => {
    
//     favourites = 
//     const favList = new Favourite({
//     favourites: favourites,
//     id:id
    
//     });

//     favourites
//     .save()
//     .then(result => {
        
//     })
//     .catch(error => {
//         console.log(error)
//     })
    
// }