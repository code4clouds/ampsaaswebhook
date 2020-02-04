# ampsaaswebhook

![Azure Marketplace Shopping Bag](./images/amptotebag.jpg)


This is a command line to help Azure Marketplace Publishers test the Webhook API endpoints.  Information about the webhook implementation can be found [here](https://docs.microsoft.com/en-us/azure/marketplace/partner-center-portal/pc-saas-fulfillment-api-v2#implementing-a-webhook-on-the-saas-service).

## Sample AMP Payload

``` json
{
  "id": "<this is a GUID operation id, you can call operations API with this to get status>",
  "activityId": "<this is a Guid correlation id>",
  "subscriptionId": "<Guid to uniquely identify this resource>",
  "publisherId": "<this is the publisher's name>",
  "offerId": "<this is the offer name>",
  "planId": "<this is the plan id>",
  "quantity": "<the number of seats, will be null if not per-seat saas offer>",
  "timeStamp": "2019-04-15T20:17:31.7350641Z",
  "action": "Unsubscribe",
  "status": "NotStarted"  
}
```

## Installation

Use the following command to install the tool from the Node Package Management Service

``` bash
# npm install -g ampsaaswebhook
```

## Execution

Once instaled the following command will start the cli.

``` bash
# ampwebhook
```

## Sample run

```
# ampwebhook
     _    __  __ ____   __        __   _     _                 _       ____ _     ___ 
    / \  |  \/  |  _ \  \ \      / /__| |__ | |__   ___   ___ | | __  / ___| |   |_ _|
   / _ \ | |\/| | |_) |  \ \ /\ / / _ \ '_ \| '_ \ / _ \ / _ \| |/ / | |   | |    | | 
  / ___ \| |  | |  __/    \ V  V /  __/ |_) | | | | (_) | (_) |   <  | |___| |___ | | 
 /_/   \_\_|  |_|_|        \_/\_/ \___|_.__/|_| |_|\___/ \___/|_|\_\  \____|_____|___|
                                                                                      
? Azure Marketp Publisher Webhook endpoint http://loca
lhost:8080
? Subscription ID 272bf0fb-5c32-4d43-a4a6-16ecba1a1511


? Activity ID f70e90d5-7c88-4769-8478-4deb5c07c56c
? Publishe ID 3ed62258-1a5e-4628-815b-79f149cdd3ab
? Offer ID 603f4b0d-6994-4664-ac37-dc504ffb560e
? Plan ID 16d1d649-b3b4-4579-9655-89e36d7079c8
? The number of seats, will be null if not per-seat sa
as offer 
? Webhook simulated action Unsubscribe
? Webhook simulated status NotStarted
? Send webhook payload to the endpoint Yes            {
  webhookURL: 'http://localhost:8080',
  subscriptionId: '272bf0fb-5c32-4d43-a4a6-16ecba1a151
1',
  activityId: 'f70e90d5-7c88-4769-8478-4deb5c07c56c',
  publisherId: '3ed62258-1a5e-4628-815b-79f149cdd3ab',
  offerId: '603f4b0d-6994-4664-ac37-dc504ffb560e',
  planId: '16d1d649-b3b4-4579-9655-89e36d7079c8',
  quantity: '',
  action: 'Unsubscribe',
  status: 'NotStarted',
  confirm: 'yes'
}
{
  message_received: {
    id: 'd312a01a-ea0f-473d-80da-2c707c3051ec',
    activityId: 'f70e90d5-7c88-4769-8478-4deb5c07c56c',
    subscriptionId: '272bf0fb-5c32-4d43-a4a6-16ecba1a1511',
    publisherId: '3ed62258-1a5e-4628-815b-79f149cdd3ab',
    offerId: '603f4b0d-6994-4664-ac37-dc504ffb560e',
    planId: '16d1d649-b3b4-4579-9655-89e36d7079c8',
    quantity: '',
    timeStamp: 'function now() { [native code] }',
    action: 'f70e90d5-7c88-4769-8478-4deb5c07c56c',
    status: 'NotStarted'
  }
}
statusCode: 200
```

## Development

I am using the VS Code container development experience.  There is .dev container that has the tools and dependencies installed to facilitate development.  You can download it [here](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) and use the .devcontainer folder to open the container environment.

The test server can be run using the following:

``` bash
npm run-script server
```

## Publishing

``` bash
npm version 1.0.x
npm runscript postversion
npm publish
```

The postversion will run git push to a tag.