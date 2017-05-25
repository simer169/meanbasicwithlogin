var express = require('express');
var router = express.Router();
var Product = require('../models/product');



/* GET home page. */
router.get('/', function(req, res, next) {

Product.find(function(err,docs){
    console.log(docs);
    var productChunks = [];
    var chunkSize = 2;
  //  for(var i=0; i<docs.length;i += chunkSize){
   //     console.log(i+','+ (i+chunkSize));
   //   productChunks.push(docs.slice(i,i+chunkSize));
  //  }
    productChunks.push(docs);
    console.log(productChunks);
    res.render('shop/index', { title: 'Shopping cart....', products: productChunks });
    }


);

});



module.exports = router;
