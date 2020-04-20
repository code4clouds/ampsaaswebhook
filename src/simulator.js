const request = require('request');
const uuidv4 = require('uuid/v4') // random uud

module.exports = {
    PostMessage: (info) => {
        const data =
        {
            "id": uuidv4(),
            "activityId": info.activityId,
            "subscriptionId": info.subscriptionId,
            "publisherId": info.publisherId,
            "offerId": info.offerId,
            "planId": info.planId,
            "quantity": info.quantity,
            "timeStamp": new Date().toISOString(),
            "action": info.action,
            "status": info.status
        }

        const options = {
            url: info.webhookURL,
            path: '/',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': data.length
            },
            json: data
          }

        request.post(options, function (err, res, body) {
            if (err) {
                console.log('Error sending webhook message.' + err);
            }
            else {
                console.log(body)
                console.log(`statusCode: ${res.statusCode}`)            
            }
        });
    }
};