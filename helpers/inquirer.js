import inquirer from 'inquirer';
import 'colors';

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: '1',
                name: `${ '1.'.red } ${'Create tasks'}`
            },
            {
                value: '2',
                name: `${ '2.'.red } ${'List tasks'}`
            },
            {
                value: '3',
                name: `${ '3.'.red } ${'List completed tasks'}`
            },
            {
                value: '4',
                name: `${ '4.'.red } ${'List pending tasks'}`
            },
            {
                value: '5',
                name: `${ '5.'.red } ${'Complete task(s)'}`
            },
            {
                value: '6',
                name: `${ '6.'.red } ${'Delete task'}`
            },
            {
                value: '0',
                name: `${ '0.'.red } ${'Exit\n'}`
            }

        ]
    }
]

export const inquirerMenu = async() => {

    console.clear();
    console.log('================'.white);
    console.log('Select an option'.red);
    console.log('================\n'.white);

    const {option} = await inquirer.prompt(questions);

    return option;
}

export const pause = async() => {

    const pauseQuestion = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'Enter'.red} to continue`
        }
    ]

    await inquirer.prompt(pauseQuestion);
}

export const readInput = async(message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if(value.length === 0) {
                    return 'Please enter a value';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

export const deleteTaskList = async (tasks = []) => {
    const choices = tasks.map((task, index) => {
        const idx = `${index + 1}.`.green;

        return {
            value: task.id,
            name: `${idx} ${task.desc}`
        }
    });

    
    const questions = [{
        type: 'list',
        name: 'id',
        message: 'Delete',
        choices
    }]
    
    choices.unshift({
        value: '0',
        name: '0. '.green + 'Cancel'
    })

    const {id} = await inquirer.prompt(questions);
    return id;
}

export const confirm = async (message) => {
    const questions = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const {ok} = await inquirer.prompt(questions);
    return ok;
}

export const showChecklist = async (tasks = []) => {
    const choices = tasks.map((task, index) => {
        const idx = `${index + 1}.`.green;

        return {
            value: task.id,
            name: `${idx} ${task.desc}`,
            checked: (task.completedOn) ? true : false
        }
    });

    const question = [{
        type: 'checkbox',
        name: 'ids',
        message: 'Select tasks',
        choices
    }]

    const {ids} = await inquirer.prompt(question);
    return ids;
}

/*module.exports = {
    inquirerMenu
}*/

//export const inquirerMenuExport = inquirerMenu()