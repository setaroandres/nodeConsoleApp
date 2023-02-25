import 'colors';

import { 
    inquirerMenu,
    pause,
    readInput,
    deleteTaskList,
    confirm,
    showChecklist
} from './helpers/inquirer.js';
import { Tasks } from './models/tasks.js';
import { saveDB, readDB } from "./helpers/dbInteractions.js";
//const { showMenu, pause } = require('./helpers/messages');

//Because we're going to work with async methods, we create the main with the async method (the main is created to run the proyect)
const main = async() => {
    //console.clear();

    //Get the option selected
    let opt = '';
    const tasks = new Tasks();
    const dbTasks = readDB();

    if (dbTasks) {
        //Instanciate tasks
        tasks.loadTasksFromArray(dbTasks);
    }
    
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
                tasks.wholeList();
            break;

            case '3':
                //list completed tasks
                tasks.listPendingCompleted();
            break; 

            case '4':
                //list pending tasks
                tasks.listPendingCompleted(false);
            break;

            case '5':
                //complete | pending
                const ids = await showChecklist(tasks.listArr);
                tasks.toggleCompleted(ids);
            break;

            case '6':
                //delete task
                const id = await deleteTaskList(tasks.listArr);
                if (id !== '0') {
                    const ok = await confirm('Are you sure you want to delete?');
                    if (ok) {
                        tasks.deleteTask(id);
                        console.log('Task successfully deleted!');                
                    }
                }
            break;
        
            default:
                break;
        }

        //if(opt !== '0') await pause(); //MANUALLY
        //console.log('\n');

        saveDB(tasks.listArr);

        await pause();

    } while (opt !== '0');

}

main();