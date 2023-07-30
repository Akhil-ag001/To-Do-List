import calendar from "./Assets/Images/calendar.svg";
import trashCan from "./Assets/Images/trash-can.svg";

export default function activeProject(Project){

    let div = document.createElement("div");
    div.classList.add("active-project");
    div.classList.add("project");

    let firstDiv = document.createElement("div");
    firstDiv.classList.add("first-div");
    let firstDiv1 = document.createElement("div");
    firstDiv1.classList.add("name");
    firstDiv1.textContent = Project.name;

    let firstDiv2 = document.createElement("div");
    firstDiv2.classList.add("priority");
    firstDiv2.classList.add(Project.priority);
    firstDiv2.textContent = Project.priority;

    firstDiv.appendChild(firstDiv1);
    firstDiv.appendChild(firstDiv2);
    div.appendChild(firstDiv);

    let secondDiv = document.createElement("div");
    secondDiv.classList.add("notes");
    secondDiv.textContent = Project.description;

    div.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    thirdDiv.classList.add("progress-bar");
    let thirdDiv1 = document.createElement("progress");
    thirdDiv1.setAttribute("value", Project.countComplete());
    thirdDiv1.setAttribute("max", Project.taskList.length);

    thirdDiv.appendChild(thirdDiv1);
    let thirdDiv2 = document.createTextNode("\u00A0" + Project.countComplete() + " / " + Project.taskList.length);
    thirdDiv.appendChild(thirdDiv2);

    div.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    fourthDiv.classList.add("due-date");

    let fourthDiv1 = document.createElement("img");
    fourthDiv1.src = calendar;
    fourthDiv1.classList.add("icon");

    let fourthDiv2 = document.createElement("div");
    fourthDiv2.textContent = Project.dueDate;

    let fourthDiv3 = document.createElement("img");
    fourthDiv3.src = trashCan;
    fourthDiv3.classList.add("icon");
    fourthDiv3.id = "edit-option-delete"

    fourthDiv.appendChild(fourthDiv1);
    fourthDiv.appendChild(fourthDiv2);
    fourthDiv.appendChild(fourthDiv3);

    div.appendChild(fourthDiv);

    return div;
}