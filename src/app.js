const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const inquirer = require("../lib/inquirer");
const simulator = require("../lib/simulator");

clear();

console.log(chalk.blue(figlet.textSync('AMP Webhook CLI')));

const run = async () => {
    let confirm = 'no';
    let answers;
    do {
        const info = await inquirer.askWebhookURL();
        console.log(info);
        confirm = info.confirm;
        if(confirm === 'exit') {    
            process.exit(0);
        }
        if(confirm === 'yes') {
            answers = info;
            simulator.PostMessage(info);
        }
    } while (confirm === 'no');
}

run();