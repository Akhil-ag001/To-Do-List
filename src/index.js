import Project from './project.js';

export default class ProjectList {
    projectList;

    constructor(){
        this.projectList = [];
    }

    getProjectList = ()=>{
        return projectList;
    }

    addProject = (name, dueDate, priority)=>{
        let project = new Project(name, dueDate, priority);
    
        projectList.push(project);
    }
    
    deleteProject = ({name})=>{
        projectList.forEach(element, (element)=>{
            if(element.name == name){
                projectList.pop(element);
            }
        })
    }
}