/*eslint-env node */
var cloudant = require('cloudant')(cloudantService.credentials.url);
exports.cloudant = cloudant;
var itemsDb = cloudant.use('items');
exports.itemsDb = itemsDb;

//populate the db with these items.
var populateDB = function() {

    var products = [
    {
        name: 'Face mask',
        color: 'white',
        quantity: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        usaDollarPrice: 0.00,
        imgsrc:'https://images-na.ssl-images-amazon.com/images/I/71Okw5cMcDL._SX425_.jpg'
    },
    {
        name: 'Gloves',
        color: 'blue',
        quantity: 53,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        usaDollarPrice: 0.00,
        imgsrc:'https://w7.pngwing.com/pngs/125/461/png-transparent-medical-glove-nitrile-rubber-medical-gloves-hand-cleaning-material.png'
    },
    {
        name: 'Face shield mask',
        color: 'white',
        quantity: 7,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        usaDollarPrice: 0.00,
        imgsrc:'https://img.kalunga.com.br/FotosdeProdutos/549744d.jpg'
    },  
    {
        name: 'Hand sanitizer',
        color: 'white',
        quantity: 155,
        description: 'These have been fueling IBMers for ages!',
        usaDollarPrice: 0.00,
        imgsrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQX5qoM1o6BrAC2TX6Uhs19bN9jlhBpwSvRQA&usqp=CAU'
    }];

    for (var p in products){
        itemsDb.insert(products[p], function(err/*, body, header*/) {
            if (err){
                //console.log('error in populating the DB items: ' + err );
            }
        });
    }   
};
exports.populateDB = populateDB;

//Initiate the database.
var initDB = function() {
    cloudant.db.create('items', function(err/*, body*/) {
	    if (!err) {
	        populateDB();
	        //console.log('Successfully created database and populated!');
	    } else {
	        //console.log("Database already exists.");
	    }
    });
};
exports.initDB = initDB;
