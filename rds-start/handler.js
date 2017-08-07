'use strict';

const AWS = require('aws-sdk');


exports.start = (event, context, callback) => {

    const rds = new AWS.RDS();
    const ins = process.env.INSTANCEID.split(',').map(val => val.trim());

    const resultStartDBInstance = (err, data) => {
        if (err) console.log(err, err.stack);
        else     console.log(data);
    };

    for (var i in ins) {

        var params = {
            DBInstanceIdentifier: ins[i]
        };

        console.log(params);

        rds.startDBInstance(params, resultStartDBInstance);

    }


};
