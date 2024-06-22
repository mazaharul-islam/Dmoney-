const newman = require('newman');
require('dotenv').config();

newman.run({
    collection:'https://api.postman.com/collections/27409493-de0016f9-6597-4e4a-b24f-32b60391171d?access_key=${process.env.secretkey}',
    reporters:'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function (err){
    if (err) {throw err; }
    console.log('çollection run complete' ); 

});