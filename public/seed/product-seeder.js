var Product = require('../../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [

    new Product({
        imagePath:'http://mythologian.net/wp-content/uploads/2013/05/ragnar-lothbrok-vikings-wallpaper-1024x576.png',
        title:'Vikings',
        description:'Nice series',
        price:10
    }),
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/4/42/Vikings_Season_4_Volume_1.png',
        title:'Vikings 2',
        description:'Nice series',
        price:104

    }),
    new Product({
        imagePath:'https://pbs.twimg.com/profile_images/773155845941043202/v4hEis-Y.jpg',
        title:'Movie Condor',
        description:'Nice series',
        price:1023

    })
];

var done = 0;
for(var i = 0 ; i< products.length; i++ ){
    products[i].save(function(err, result){

        done++;
        if(done === products.length){

            exit();
        }

    });
}

function exit() {
    mongoose.disconnect();
}