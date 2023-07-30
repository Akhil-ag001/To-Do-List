export default class Task {
    title;
    description;
    dueDate;
    priority;
    status;

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = false;
    }

    get title(){
        return this.title;
    }
    get dueDate(){
        return this.dueDate;
    }

    updateStatus(){
        this.status = true;
    }

    
}