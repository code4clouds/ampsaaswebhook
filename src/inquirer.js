const inquirer = require('inquirer')  // lib to prompt questions
const uuidv4 = require('uuid/v4') // random uud

module.exports = {
    askWebhookURL: () => {
        const questions = [
            {
                name: 'webhookURL',
                type: 'input',
                message: 'Azure Marketp Publisher Webhook endpoint',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    }
                    else {
                        return 'Enter your Webhook endpoint'
                    }
                }
            }, {
                name: 'subscriptionId',
                type: 'input',
                message: 'Subscription ID',
                default: uuidv4(),
            },
            {
                name: 'activityId',
                type: 'input',
                message: 'Activity ID',
                default: uuidv4(),
            },
            {
                name: 'publisherId',
                type: 'input',
                message: 'Publisher ID',
                default: uuidv4(),
            },
            {
                name: 'offerId',
                type: 'input',
                message: 'Offer ID',
                default: uuidv4(),
            },
            {
                name: 'planId',
                type: 'input',
                message: 'Plan ID',
                default: uuidv4(),
            },
            {
                name: 'quantity',
                type: 'input',
                message: 'The number of seats, will be null if not per-seat saas offer',
                default: null,
            },
            {
                name: 'action',
                type: 'list',
                message: 'Webhook simulated action',
                choices: ["Unsubscribe", "ChangePlan", "ChangeQuantity", "Suspend", "Reinstate"],
            },
            {
                name: 'status',
                type: 'list',
                message: 'Webhook simulated status',
                choices: ['NotStarted', 'InProgress', 'Succeeded', 'Failed', 'Conflict'],
            },
            {
                name: 'confirm',
                type: 'expand',
                message: 'Send webhook payload to the endpoint',
                default: 'yes',
                choices: [
                    {
                        key: 'y',
                        name: 'Yes',
                        value: 'yes'
                    },
                    {
                        key: 'n',
                        name: 'No - repeat the questions',
                        value: 'no'
                    },
                    {
                        key: 'x',
                        name: 'Exit',
                        value: 'exit'
                    }
                ],
                
            },
        ];
        return inquirer.prompt(questions);
    }
};
