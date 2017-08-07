'use strict';

const AWS = require('aws-sdk');


exports.stop = (event, context, callback) => {

    const rds = new AWS.RDS();
    const ins = process.env.INSTANCEID.split(',').map(val => val.trim());

    const resultStopDBInstance = (err, data) => {
        if (err) console.log(err, err.stack);
        else     console.log(data);
    };

    for (var i in ins) {

        var params = {
            DBInstanceIdentifier: ins[i]
        };

        console.log(params);

        rds.stopDBInstance(params, resultStopDBInstance);

    }


};
