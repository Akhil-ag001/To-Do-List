import calendar from "./Assets/Images/calendar-white.svg";
import checkBlankCircle from "./Assets/Images/check-blank-circle-white.svg";
import trashCan from "./Assets/Images/trash-can-white.svg";

export default class Task {
    title;
    description;
    dueDate;
    priority;
    status;
    #recent;
    project;

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = false;
        recent = 0;
    }

    get title(){
        return this.title;
    }
    get dueDate(){
        return this.dueDate;
    }
    get recent(){
        return this.#recent;
    }

    updateStatus(){
        this.status = true;
    }

    htmlNote(){

        let div = document.createElement("div");
        div.classList.add("note");
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

        let secondDiv = document.createElement("div");
        secondDiv.classList.add("notes");
        secondDiv.textContent = Project.description;
        div.appendChild(secondDiv);
    
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
}