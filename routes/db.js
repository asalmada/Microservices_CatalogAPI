/*eslint-env node */
var cloudant = require('cloudant')(cloudantService.credentials.url);
exports.cloudant = cloudant;
var itemsDb = cloudant.use('items');
exports.itemsDb = itemsDb;

//populate the db with these items.
var populateDB = function() {

    var products = [
    {
        name: 'Disposable Gloves',
        color: 'green',
        quantity: 53,
        description: 'GUIDANCE: Use gloves whenever you touch surfaces contaminated by body fluids. As an aircraft maintenance worker, you could be exposed to COVID-19 in situations such as when you have close contact with someone with COVID-19, when you touch surfaces while repairing aircraft interiors and lavatories that have been touched or handled by a person with COVID-19, or by touching your mouth, nose, or eyes.',
        usaDollarPrice: 0.00,
        imgsrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Surgical_gloves_27.JPG/320px-Surgical_gloves_27.JPG'
    },
    {
        name: 'Face Coverings',
        color: 'blue',
        quantity: 5,
        description: 'CDC recommends wearing cloth face coverings in public settings where other social distancing measures are difficult to maintain, especially in areas of significant community-based transmission. Cloth face coverings may prevent people who don’t know they have the virus from transmitting it to others. These face coverings are not surgical masks or respirators and are not appropriate substitutes for them in workplaces where masks or respirators are recommended or required.',
        usaDollarPrice: 0.00,
        imgsrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Wearing_protective_mask_during_the_COVID-19_pandemic_in_Lutsk%2C_April%2C_2020.jpg/320px-Wearing_protective_mask_during_the_COVID-19_pandemic_in_Lutsk%2C_April%2C_2020.jpg'
    },
    {
        name: 'Hand Sanitizer',
        color: 'white',
        quantity: 7,
        description: 'Proper hand hygiene is an important infection control measure. Wash your hands regularly with soap and water for at least 20 seconds. If soap and water are not readily available, use an alcohol-based hand sanitizer containing at least 60% alcohol.',
        usaDollarPrice: 0.00,
        imgsrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harmon_Face_Values_Hand_Sanitizer.jpg/360px-Harmon_Face_Values_Hand_Sanitizer.jpg'
    },  
    {
        name: 'Face Shield Mask',
        color: 'white',
        quantity: 155,
        description: 'If cleaning is required before you make repairs, first review CDC cleaning guidance for Airlines and Airline Crew: Coronavirus Disease 2019 (COVID-19). Use Face shield masks on the following conditions: Air Filter Replacement (when replacing air filters including HEPA filters) and for Waste and Wastewater Handling (when performing work tasks that could expose you to untreated waste and wastewater)',
        usaDollarPrice: 0.00,
        imgsrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Face_shield_5.jpg/360px-Face_shield_5.jpg'
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
