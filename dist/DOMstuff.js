const projects = document.getElementById("projects");
const notes = document.getElementById("notes");
const dashboard = document.getElementById("home");

const currentSection = document.getElementById("current-section");
const recentProjects = document.getElementById("recent-projects");
const recentNotes = document.getElementById("recent-notes");
const allProjects = document.getElementById("all-projects");
const allNotes = document.getElementById("all-notes");

dashboard.addEventListener("click", ()=>{
    recentProjects.classList.remove("hidden");
    recentNotes.classList.remove("hidden");
    allProjects.classList.add("hidden");
    allNotes.classList.add("hidden");
})