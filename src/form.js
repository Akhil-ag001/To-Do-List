import Task from "./task.js"
import Project from "./project.js";

const submitBtn = document.getElementById("task-submit");


export const checkDate = ()=>{
    let months = ["1", "3", "5", "7", "8", "10", "12"];

    let year = document.getElementById("due-year").value - 0;
    let month = document.getElementById("due-month").value;
    let day = document.getElementById("due-day").value - 0;

    if(year%4 == 0 && month == 2 && day > 29)
        return false;
    else if(year%4 != 0 && month == 2 && day > 28)
        return false;
    else if(!months.includes(month) && day > 30)
        return false;

    return true;
}

export const createTask = ()=>{
    const newTask = 
            new Task(
                document.getElementById("task-name").value,
                document.getElementById("task-desc").value,
                new Date(
                    document.getElementById("due-year").value - 0,
                    document.getElementById("due-month").value - 1,
                    document.getElementById("due-day").value - 0),
                document.querySelector('input[name="priority"]:checked').value
                )
    
    return newTask;
                    
}

export const createProject = ()=>{
    const newProject = 
            new Project(
                document.getElementById("task-name").value,
                document.getElementById("task-desc").value,
                new Date(
                    document.getElementById("due-year").value - 0,
                    document.getElementById("due-month").value - 1,
                    document.getElementById("due-day").value - 0),
                document.querySelector('input[name="priority"]:checked').value
                )

    return newProject;
}

