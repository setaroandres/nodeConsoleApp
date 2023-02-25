import { Task } from "./task.js";

export class Tasks {
    _list = {};

    ///Create a getter to return the list as an Array
    get listArr() {
        const list = [];

        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            list.push(task);
        })

        return list;
    }

    constructor() {
        this._list = {};
    }

    deleteTask(id = '') {

        if (this._list[id]) {
            delete this._list[id];
        }
    }

    loadTasksFromArray(tasks = []) {
        tasks.forEach(task => {
            this._list[task.id] = task;
        })
    }

    createTask(desc = '') {
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    wholeList() {
        console.log();
        this.listArr.forEach((task, index) => {
            const idx = `${index + 1}`.green;
            const { desc, completedOn } = task;
            const state = completedOn ? 'Completed'.green : 'Pending'.red;

            console.log(`${idx} ${desc} :: ${state}`);
        })
    }

    listPendingCompleted(completed=true) {
        console.log();
        let counter = 0;

        this.listArr.forEach( task => {
            const { desc, completedOn } = task;
            const state = completedOn ? 'Completed'.green : 'Pending'.red;

            if (completed) {
                if (completedOn) {
                    counter += 1;
                    console.log(`${(counter + '.').green} ${desc} :: ${completedOn.green}`);
                }
            } else {
                if (!completedOn) {
                    counter += 1;
                    console.log(`${(counter + '.').green} ${desc} :: ${state}`);
                }
            }

        })
    }

    toggleCompleted(ids = []) {

        //to check ids
        ids.forEach(id => {
            const task = this._list[id];
            if (!task.completedOn) {
                task.completedOn = new Date().toISOString();
            }
        });

        //To remove complete if toggle
        this.listArr.forEach(task => {
            if (!ids.includes(task.id)) {
                this._list[task.id].completedOn = null;
            }
        })

    }
}