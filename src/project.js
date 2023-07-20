import task from './task.js'

export default class Project {
    name;
    dueDate;
    priority;

    constructor (name, dueDate, priority){
        this.name = name;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    taskList = [];

    addTask( newTask ) {
        this.taskList.push( newTask );
    }

    deletetask( task ) {
        this.taskList.pop(task);
    }
}