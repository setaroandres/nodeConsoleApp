const { resolve } = require('path');

require('colors');

const showMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('================'.green);
        console.log('Select an option'.green);
        console.log('================\n'.green);
    
        console.log(`${ '1.'.green } Create task`);
        console.log(`${ '2.'.green } List tasks`);
        console.log(`${ '3.'.green } List completed tasks`);
        console.log(`${ '4.'.green } List pending tasks`);
        console.log(`${ '5.'.green } Complete task(s)`);
        console.log(`${ '6.'.green } Delete task`);
        console.log(`${ '0.'.green } Exit\n`);
    
        //To receive user information
        //First we need to prepare user interface
        const readline = require('readline').createInterface({
            input: process.stdin, //To wait for user input
            output: process.stdout //Output to show a console message after input
        });
    
        //To show info to the user
        readline.question('Select an option: ', (opt) => {
            //Here the answer(callback) to the question
            readline.close();
            resolve(opt);
        });
    })
}

const pause = () => {

    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin, //To wait for user input
            output: process.stdout //Output to show a console message after input
        });
    
        //To show info to the user
        readline.question(`Press ${ 'ENTER'.green } to resume \n `, () => {
            readline.close();
            resolve();
        });
    })

}

///We need to export in order to be able to instanciate this function on the main
///We export as an object because we might have method and properties inside showMenu()
module.exports = {
    showMenu,
    pause
}