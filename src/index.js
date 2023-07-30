import Project from './project.js';
import activeProject from './active_project.js';
import { createTask,createProject, checkDate } from "./form.js";
import Task from "./task.js";
import ProjectList from './project_List.js';







const projects = document.getElementById("projects");
const notes = document.getElementById("notes");
const dashboard = document.getElementById("home");
const createNote = document.getElementById("create-note");
const createProject = document.getElementById("create-project");
const taskCancel = document.getElementById("task-cancel");
const taskSubmit = document.getElementById("task-submit");

const currentSection = document.getElementById("current-section");
const recentProjects = document.getElementById("recent-projects");
const recentNotes = document.getElementById("recent-notes");
const allProjects = document.getElementById("all-projects");
const allNotes = document.getElementById("all-notes");
const newTaskForm = document.getElementById("new-task-form")


var submit = "";


const updateScreenDashboard = ()=>{
    recentProjects.classList.remove("hidden");
    recentNotes.classList.remove("hidden");
    allProjects.classList.add("hidden");
    allNotes.classList.add("hidden");
    createNote.classList.remove("hidden");
    createProject.classList.remove("hidden");

    displayRecentProjects();
    dispalyRecentNotes();
}

const updateScreenProjects = ()=>{
    recentProjects.classList.add("hidden");
    recentNotes.classList.add("hidden");
    allProjects.classList.remove("hidden");
    allNotes.classList.add("hidden");
    createNote.classList.add("hidden");
    createProject.classList.remove("hidden");

    displayProjects(projectList);
}

const updateScreenNotes = ()=>{
    recentProjects.classList.add("hidden");
    recentNotes.classList.add("hidden");
    allProjects.classList.add("hidden");
    allNotes.classList.remove("hidden");
    createNote.classList.remove("hidden");
    createProject.classList.add("hidden");

    displayNotes(noteList);
}

dashboard.addEventListener("click", updateScreenDashboard)

projects.addEventListener("click", updateScreenProjects)

notes.addEventListener("click", updateScreenNotes)

createNote.addEventListener("click", ()=>{

    submit = "note";

    newTaskForm.classList.remove("hidden");
    document.getElementById("main-content").classList.add("blur-filter");
    dashboard.removeEventListener("click", updateScreenDashboard);
    projects.removeEventListener("click", updateScreenProjects);
    notes.removeEventListener("click", updateScreenNotes);
})

createProject.addEventListener("click", ()=>{

    submit = "project";

    newTaskForm.classList.remove("hidden");
    document.getElementById("main-content").classList.add("blur-filter");
    dashboard.removeEventListener("click", updateScreenDashboard);
    projects.removeEventListener("click", updateScreenProjects);
    notes.removeEventListener("click", updateScreenNotes);
})

taskCancel.addEventListener("click", ()=>{
    newTaskForm.classList.add("hidden");
    document.getElementById("main-content").classList.remove("blur-filter");
    dashboard.addEventListener("click", updateScreenDashboard);
    projects.addEventListener("click", updateScreenProjects);
    notes.addEventListener("click", updateScreenNotes);
})

taskSubmit.addEventListener("click", (e)=>{

    if(!checkDate()){
        document.getElementById("due-day").setCustomValidity("Invalid Date");
    }
    else
        e.preventDefault();

        if(submit == "note")
            createTask();
        else
            createProject();

        newTaskForm.classList.add("hidden");
        document.getElementById("main-content").classList.remove("blur-filter");
        dashboard.addEventListener("click", updateScreenDashboard);
        projects.addEventListener("click", updateScreenProjects);
        notes.addEventListener("click", updateScreenNotes);

})



