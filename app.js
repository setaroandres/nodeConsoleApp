import 'colors';

import { 
    inquirerMenu,
    pause,
    readInput
} from './helpers/inquirer.js';
import { Tasks } from './models/tasks.js';
//const { showMenu, pause } = require('./helpers/messages');

//Because we're going to work with async methods, we create the main with the async method (the main is created to run the proyect)
const main = async() => {
    //console.clear();

    //Get the option selected
    let opt = '';
    const tasks = new Tasks();

    do {
        //As the menu returns a promise, we can wait fo the resolution. If not the app does not proceed
        //opt = await showMenu(); //MANUALLY
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //create task
                const desc = await readInput('Description:');
                tasks.createTask(desc);
            break;

            case '2':
                //list task
                console.log(tasks._list);
            break;    
        
            default:
                break;
        }

        //if(opt !== '0') await pause(); //MANUALLY
        console.log('\n');
        await pause();

    } while (opt !== '0');

}

main();