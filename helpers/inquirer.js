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
                name: `${ '1.'.green } Create tasks`
            },
            {
                value: '2',
                name: `${ '2.'.green } List tasks`
            },
            {
                value: '3',
                name: `${ '3.'.green } List completed tasks`
            },
            {
                value: '4',
                name: `${ '4.'.green } List pending tasks`
            },
            {
                value: '5',
                name: `${ '5.'.green } Complete task(s)`
            },
            {
                value: '6',
                name: `${ '6.'.green } Delete task`
            },
            {
                value: '0',
                name: `${ '0.'.green } Exit\n`
            }

        ]
    }
]

export const inquirerMenu = async() => {

    console.clear();
    console.log('================'.green);
    console.log('Select an option'.green);
    console.log('================\n'.green);

    const {option} = await inquirer.prompt(questions);

    return option;
}

export const pause = async() => {

    const pauseQuestion = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'Enter'.green} to continue`
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

/*module.exports = {
    inquirerMenu
}*/

//export const inquirerMenuExport = inquirerMenu()