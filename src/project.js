
export default class Project {
    title;
    description;
    dueDate;
    priority;
    count;
    
    constructor (title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    taskList = [];
    count = 0;

    addTask( newTask ) {
        this.taskList.push( newTask );
    }

    deletetask( task ) {
        this.taskList.pop(task);
    }

    countComplete(){
        this.taskList.forEach((element)=>{
            if(element.status == true){
                count++;
            }
        })
        return this.count;
    }

    htmlProject(){

        let div = document.createElement("div");
        div.classList.add("project");
        div.id = this.title;
    
        let firstDiv = document.createElement("div");
        firstDiv.classList.add("first-div");
        let firstDiv1 = document.createElement("div");
        firstDiv1.classList.add("name");
        firstDiv1.textContent = this.title;
    
        let firstDiv2 = document.createElement("div");
        firstDiv2.classList.add(["priority", this.priority]);
        firstDiv2.textContent = this.priority;
    
        firstDiv.appendChild(firstDiv1);
        firstDiv.appendChild(firstDiv2);
        div.appendChild(firstDiv);
    
        let thirdDiv = document.createElement("div");
        thirdDiv.classList.add("progress-bar");
        let thirdDiv1 = document.createElement("progress");
        thirdDiv1.setAttribute("value", this.countComplete());
        thirdDiv1.setAttribute("max", this.taskList.length);
    
        thirdDiv.appendChild(thirdDiv1);
        let thirdDiv2 = document.createTextNode("\u00A0" + this.countComplete() + " / " + this.taskList.length);
        thirdDiv.appendChild(thirdDiv2);
    
        div.appendChild(thirdDiv);
    
        let fourthDiv = document.createElement("div");
        fourthDiv.classList.add("due-date");
    
        let fourthDiv1 = document.createElement("img");
        fourthDiv1.src = calendar;
        fourthDiv1.classList.add("icon");
    
        let fourthDiv2 = document.createElement("div");
        fourthDiv2.textContent = this.dueDate;

        fourthDiv.appendChild(fourthDiv1);
        fourthDiv.appendChild(fourthDiv2);
    
        div.appendChild(fourthDiv);
    
        let fifthDiv = document.createElement("div");
        fifthDiv.classList.add("edit-options");

        let fifthDiv1 = document.createElement("img");
        fifthDiv1.src = checkBlankCircle;
        fifthDiv1.id = "edit-option-check";
        fifthDiv1.classList.add("icon");

        let fifthDiv2 = document.createElement("img");
        fifthDiv2.src = trashCan;
        fifthDiv1.id = "edit-option-delete";
        fifthDiv1.classList.add("icon");

        fifthDiv.appendChild(fifthDiv1);
        fifthDiv.appendChild(fifthDiv2);
        div.appendChild(fifthDiv);
    
        return div;
    }

    htmlActiveProject(){

        let div = this.htmlProject;
        div.classList.add("active-project");

        refNode = document.querySelector("#" + this.title + ">.progress-bar");

        let secondDiv = document.createElement("div");
        secondDiv.classList.add("notes");
        secondDiv.textContent = Project.description;

        div.insertBefore(secondDiv, refNode);
    }
}