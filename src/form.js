// import task from "./task.js"

const createForm = () => {

}

const taskForm = document.getElementById("task-form");
const submitBtn = document.getElementById("task");

const createDate = ()=>{
    const dueDate = new Date(
        document.getElementById("due-year").value + "/" +
        document.getElementById("due-month").value + "/" +
        document.getElementById("due-day").value
    )

    return dueDate;
}

// const task = new task(
//     document.getElementById("task-name").value,
//     document.getElementById("task-desc").value,
//     dueDate,
//     document.getElementById("task-priority").value
// )

// submitBtn.addEventListener("click", (e)=>{
//     e.preventDefault();
//     const date = createDate();

//     if(!isNaN(date.getTime())){
//         document.getElementById("due-day").setCustomValidity = "Wrong date";
//     }
// })