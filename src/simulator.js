const request = require('request');
const uuidv4 = require('uuid/v4') // random uud

module.exports = {
    PostMessage: (info) => {
        const message =
        {
            "id": uuidv4(),
            "activityId": info.activityId,
            "subscriptionId": info.subscriptionId,
            "publisherId": info.publisherId,
            "offerId": info.offerId,
            "planId": info.planId,
            "quantity": info.quantity,
            "timeStamp": Date.now.toString(),
            "action": info.activityId,
            "status": info.status
        }
        request.post(info.webhookURL, message, function (err, res, body) {
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