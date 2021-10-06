
const yargs = require('yargs');
const commands = require('./commands');
const chalk = require('chalk');

let command = yargs.argv._[0];
let title = yargs.argv.title;
let body = yargs.argv.body;

if(command == 'add'){
    if( title && body){
        commands.add(title, body);
        console.log(chalk.bgGreen('Added'));
    }
}else if( command == 'remove'){
    if(title){
        commands.remove(title);
        console.log(chalk.bgRed('Removed'));
    }
} else if (command =='read') {
    if(title){
        console.log(chalk.bgBlue('read'));
        commands.read(title);
    } 
} else {
    console.log(chalk.bgYellow('List'));
    commands.list();
} 

    
