export default class ProjectList {
    projectList;

    constructor(){
        this.projectList = [];
    }

    getProjectList = ()=>{
        return projectList;
    }

    addProject = (name)=>{
        projectList.push(name);
    }
    
    deleteProject = ({name})=>{
        projectList.forEach(element, (element)=>{
            if(element.name == name){
                projectList.pop(element);
            }
        })
    }
}