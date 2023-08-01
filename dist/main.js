/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/active_project.js":
/*!*******************************!*\
  !*** ./src/active_project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ activeProject)
/* harmony export */ });
/* harmony import */ var _Assets_Images_calendar_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assets/Images/calendar.svg */ "./src/Assets/Images/calendar.svg");
/* harmony import */ var _Assets_Images_trash_can_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assets/Images/trash-can.svg */ "./src/Assets/Images/trash-can.svg");



function activeProject(Project){

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
    fourthDiv1.src = _Assets_Images_calendar_svg__WEBPACK_IMPORTED_MODULE_0__;
    fourthDiv1.classList.add("icon");

    let fourthDiv2 = document.createElement("div");
    fourthDiv2.textContent = Project.dueDate;

    let fourthDiv3 = document.createElement("img");
    fourthDiv3.src = _Assets_Images_trash_can_svg__WEBPACK_IMPORTED_MODULE_1__;
    fourthDiv3.classList.add("icon");
    fourthDiv3.id = "edit-option-delete"

    fourthDiv.appendChild(fourthDiv1);
    fourthDiv.appendChild(fourthDiv2);
    fourthDiv.appendChild(fourthDiv3);

    div.appendChild(fourthDiv);

    return div;
}

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkDate: () => (/* binding */ checkDate),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createTask: () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");



const submitBtn = document.getElementById("task-submit");


const checkDate = ()=>{
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

const createTask = ()=>{
    const newTask = 
            new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](
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

const createProject = ()=>{
    const newProject = 
            new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"](
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



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });

class Project {
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

/***/ }),

/***/ "./src/project_List.js":
/*!*****************************!*\
  !*** ./src/project_List.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectList)
/* harmony export */ });
class ProjectList {
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

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _Assets_Images_calendar_white_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assets/Images/calendar-white.svg */ "./src/Assets/Images/calendar-white.svg");
/* harmony import */ var _Assets_Images_check_blank_circle_white_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assets/Images/check-blank-circle-white.svg */ "./src/Assets/Images/check-blank-circle-white.svg");
/* harmony import */ var _Assets_Images_trash_can_white_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Assets/Images/trash-can-white.svg */ "./src/Assets/Images/trash-can-white.svg");




class Task {
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
        fourthDiv1.src = _Assets_Images_calendar_white_svg__WEBPACK_IMPORTED_MODULE_0__;
        fourthDiv1.classList.add("icon");
    
        let fourthDiv2 = document.createElement("div");
        fourthDiv2.textContent = this.dueDate;

        fourthDiv.appendChild(fourthDiv1);
        fourthDiv.appendChild(fourthDiv2);
    
        div.appendChild(fourthDiv);
    
        let fifthDiv = document.createElement("div");
        fifthDiv.classList.add("edit-options");

        let fifthDiv1 = document.createElement("img");
        fifthDiv1.src = _Assets_Images_check_blank_circle_white_svg__WEBPACK_IMPORTED_MODULE_1__;
        fifthDiv1.id = "edit-option-check";
        fifthDiv1.classList.add("icon");

        let fifthDiv2 = document.createElement("img");
        fifthDiv2.src = _Assets_Images_trash_can_white_svg__WEBPACK_IMPORTED_MODULE_2__;
        fifthDiv1.id = "edit-option-delete";
        fifthDiv1.classList.add("icon");

        fifthDiv.appendChild(fifthDiv1);
        fifthDiv.appendChild(fifthDiv2);
        div.appendChild(fifthDiv);
    
        return div;
    }
}

/***/ }),

/***/ "./src/Assets/Images/calendar-white.svg":
/*!**********************************************!*\
  !*** ./src/Assets/Images/calendar-white.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "694665a50a711bb7f241.svg";

/***/ }),

/***/ "./src/Assets/Images/calendar.svg":
/*!****************************************!*\
  !*** ./src/Assets/Images/calendar.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5938f7bd5b7ad814151.svg";

/***/ }),

/***/ "./src/Assets/Images/check-blank-circle-white.svg":
/*!********************************************************!*\
  !*** ./src/Assets/Images/check-blank-circle-white.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25498d50294a8028ef75.svg";

/***/ }),

/***/ "./src/Assets/Images/trash-can-white.svg":
/*!***********************************************!*\
  !*** ./src/Assets/Images/trash-can-white.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c32c8845be6d3202d68b.svg";

/***/ }),

/***/ "./src/Assets/Images/trash-can.svg":
/*!*****************************************!*\
  !*** ./src/Assets/Images/trash-can.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcf8d6ff346603c8a51a.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _active_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./active_project.js */ "./src/active_project.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.js */ "./src/form.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_List_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project_List.js */ "./src/project_List.js");












const projects = document.getElementById("projects");
const notes = document.getElementById("notes");
const dashboard = document.getElementById("home");
const createNoteBtn = document.getElementById("create-note");
const createProjectBtn = document.getElementById("create-project");
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
    createNoteBtn.classList.remove("hidden");
    createProjectBtn.classList.remove("hidden");

    displayRecentProjects();
    dispalyRecentNotes();
}

const updateScreenProjects = ()=>{
    recentProjects.classList.add("hidden");
    recentNotes.classList.add("hidden");
    allProjects.classList.remove("hidden");
    allNotes.classList.add("hidden");
    createNoteBtn.classList.add("hidden");
    createProjectBtn.classList.remove("hidden");

    displayProjects(projectList);
}

const updateScreenNotes = ()=>{
    recentProjects.classList.add("hidden");
    recentNotes.classList.add("hidden");
    allProjects.classList.add("hidden");
    allNotes.classList.remove("hidden");
    createNoteBtn.classList.remove("hidden");
    createProjectBtn.classList.add("hidden");

    displayNotes(noteList);
}

dashboard.addEventListener("click", updateScreenDashboard)

projects.addEventListener("click", updateScreenProjects)

notes.addEventListener("click", updateScreenNotes)

createNoteBtn.addEventListener("click", ()=>{

    submit = "note";

    newTaskForm.classList.remove("hidden");
    document.getElementById("main-content").classList.add("blur-filter");
    dashboard.removeEventListener("click", updateScreenDashboard);
    projects.removeEventListener("click", updateScreenProjects);
    notes.removeEventListener("click", updateScreenNotes);
})

createProjectBtn.addEventListener("click", ()=>{

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

    if(!(0,_form_js__WEBPACK_IMPORTED_MODULE_2__.checkDate)()){
        document.getElementById("due-day").setCustomValidity("Invalid Date");
    }
    else
        e.preventDefault();

        if(submit == "note")
            (0,_form_js__WEBPACK_IMPORTED_MODULE_2__.createTask)();
        else
            (0,_form_js__WEBPACK_IMPORTED_MODULE_2__.createProject)();

        newTaskForm.classList.add("hidden");
        document.getElementById("main-content").classList.remove("blur-filter");
        dashboard.addEventListener("click", updateScreenDashboard);
        projects.addEventListener("click", updateScreenProjects);
        notes.addEventListener("click", updateScreenNotes);

})




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxvREFBVTtBQUN0QjtBQUNBLFlBQVksdURBQWE7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWN0aXZlX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RfTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNhbGVuZGFyIGZyb20gXCIuL0Fzc2V0cy9JbWFnZXMvY2FsZW5kYXIuc3ZnXCI7XG5pbXBvcnQgdHJhc2hDYW4gZnJvbSBcIi4vQXNzZXRzL0ltYWdlcy90cmFzaC1jYW4uc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGl2ZVByb2plY3QoUHJvamVjdCl7XG5cbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wcm9qZWN0XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcblxuICAgIGxldCBmaXJzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmlyc3REaXYuY2xhc3NMaXN0LmFkZChcImZpcnN0LWRpdlwiKTtcbiAgICBsZXQgZmlyc3REaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmaXJzdERpdjEuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG4gICAgZmlyc3REaXYxLnRleHRDb250ZW50ID0gUHJvamVjdC5uYW1lO1xuXG4gICAgbGV0IGZpcnN0RGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmlyc3REaXYyLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcbiAgICBmaXJzdERpdjIuY2xhc3NMaXN0LmFkZChQcm9qZWN0LnByaW9yaXR5KTtcbiAgICBmaXJzdERpdjIudGV4dENvbnRlbnQgPSBQcm9qZWN0LnByaW9yaXR5O1xuXG4gICAgZmlyc3REaXYuYXBwZW5kQ2hpbGQoZmlyc3REaXYxKTtcbiAgICBmaXJzdERpdi5hcHBlbmRDaGlsZChmaXJzdERpdjIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChmaXJzdERpdik7XG5cbiAgICBsZXQgc2Vjb25kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWNvbmREaXYuY2xhc3NMaXN0LmFkZChcIm5vdGVzXCIpO1xuICAgIHNlY29uZERpdi50ZXh0Q29udGVudCA9IFByb2plY3QuZGVzY3JpcHRpb247XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2Vjb25kRGl2KTtcblxuICAgIGxldCB0aGlyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcmREaXYuY2xhc3NMaXN0LmFkZChcInByb2dyZXNzLWJhclwiKTtcbiAgICBsZXQgdGhpcmREaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByb2dyZXNzXCIpO1xuICAgIHRoaXJkRGl2MS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBQcm9qZWN0LmNvdW50Q29tcGxldGUoKSk7XG4gICAgdGhpcmREaXYxLnNldEF0dHJpYnV0ZShcIm1heFwiLCBQcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aCk7XG5cbiAgICB0aGlyZERpdi5hcHBlbmRDaGlsZCh0aGlyZERpdjEpO1xuICAgIGxldCB0aGlyZERpdjIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcdTAwQTBcIiArIFByb2plY3QuY291bnRDb21wbGV0ZSgpICsgXCIgLyBcIiArIFByb2plY3QudGFza0xpc3QubGVuZ3RoKTtcbiAgICB0aGlyZERpdi5hcHBlbmRDaGlsZCh0aGlyZERpdjIpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHRoaXJkRGl2KTtcblxuICAgIGxldCBmb3VydGhEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvdXJ0aERpdi5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XG5cbiAgICBsZXQgZm91cnRoRGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZm91cnRoRGl2MS5zcmMgPSBjYWxlbmRhcjtcbiAgICBmb3VydGhEaXYxLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuXG4gICAgbGV0IGZvdXJ0aERpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvdXJ0aERpdjIudGV4dENvbnRlbnQgPSBQcm9qZWN0LmR1ZURhdGU7XG5cbiAgICBsZXQgZm91cnRoRGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZm91cnRoRGl2My5zcmMgPSB0cmFzaENhbjtcbiAgICBmb3VydGhEaXYzLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuICAgIGZvdXJ0aERpdjMuaWQgPSBcImVkaXQtb3B0aW9uLWRlbGV0ZVwiXG5cbiAgICBmb3VydGhEaXYuYXBwZW5kQ2hpbGQoZm91cnRoRGl2MSk7XG4gICAgZm91cnRoRGl2LmFwcGVuZENoaWxkKGZvdXJ0aERpdjIpO1xuICAgIGZvdXJ0aERpdi5hcHBlbmRDaGlsZChmb3VydGhEaXYzKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChmb3VydGhEaXYpO1xuXG4gICAgcmV0dXJuIGRpdjtcbn0iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcblxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXN1Ym1pdFwiKTtcblxuXG5leHBvcnQgY29uc3QgY2hlY2tEYXRlID0gKCk9PntcbiAgICBsZXQgbW9udGhzID0gW1wiMVwiLCBcIjNcIiwgXCI1XCIsIFwiN1wiLCBcIjhcIiwgXCIxMFwiLCBcIjEyXCJdO1xuXG4gICAgbGV0IHllYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS15ZWFyXCIpLnZhbHVlIC0gMDtcbiAgICBsZXQgbW9udGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1tb250aFwiKS52YWx1ZTtcbiAgICBsZXQgZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF5XCIpLnZhbHVlIC0gMDtcblxuICAgIGlmKHllYXIlNCA9PSAwICYmIG1vbnRoID09IDIgJiYgZGF5ID4gMjkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBlbHNlIGlmKHllYXIlNCAhPSAwICYmIG1vbnRoID09IDIgJiYgZGF5ID4gMjgpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBlbHNlIGlmKCFtb250aHMuaW5jbHVkZXMobW9udGgpICYmIGRheSA+IDMwKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhc2sgPSAoKT0+e1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBcbiAgICAgICAgICAgIG5ldyBUYXNrKFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjXCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgIG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS15ZWFyXCIpLnZhbHVlIC0gMCxcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtbW9udGhcIikudmFsdWUgLSAxLFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXlcIikudmFsdWUgLSAwKSxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlXG4gICAgICAgICAgICAgICAgKVxuICAgIFxuICAgIHJldHVybiBuZXdUYXNrO1xuICAgICAgICAgICAgICAgICAgICBcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2plY3QgPSAoKT0+e1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBcbiAgICAgICAgICAgIG5ldyBQcm9qZWN0KFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjXCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgIG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS15ZWFyXCIpLnZhbHVlIC0gMCxcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtbW9udGhcIikudmFsdWUgLSAxLFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXlcIikudmFsdWUgLSAwKSxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlXG4gICAgICAgICAgICAgICAgKVxuXG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgdGl0bGU7XG4gICAgZGVzY3JpcHRpb247XG4gICAgZHVlRGF0ZTtcbiAgICBwcmlvcml0eTtcbiAgICBjb3VudDtcbiAgICBcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgdGFza0xpc3QgPSBbXTtcbiAgICBjb3VudCA9IDA7XG5cbiAgICBhZGRUYXNrKCBuZXdUYXNrICkge1xuICAgICAgICB0aGlzLnRhc2tMaXN0LnB1c2goIG5ld1Rhc2sgKTtcbiAgICB9XG5cbiAgICBkZWxldGV0YXNrKCB0YXNrICkge1xuICAgICAgICB0aGlzLnRhc2tMaXN0LnBvcCh0YXNrKTtcbiAgICB9XG5cbiAgICBjb3VudENvbXBsZXRlKCl7XG4gICAgICAgIHRoaXMudGFza0xpc3QuZm9yRWFjaCgoZWxlbWVudCk9PntcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuc3RhdHVzID09IHRydWUpe1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50O1xuICAgIH1cblxuICAgIGh0bWxQcm9qZWN0KCl7XG5cbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICAgICAgZGl2LmlkID0gdGhpcy50aXRsZTtcbiAgICBcbiAgICAgICAgbGV0IGZpcnN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmlyc3REaXYuY2xhc3NMaXN0LmFkZChcImZpcnN0LWRpdlwiKTtcbiAgICAgICAgbGV0IGZpcnN0RGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpcnN0RGl2MS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcbiAgICAgICAgZmlyc3REaXYxLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcbiAgICBcbiAgICAgICAgbGV0IGZpcnN0RGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpcnN0RGl2Mi5jbGFzc0xpc3QuYWRkKFtcInByaW9yaXR5XCIsIHRoaXMucHJpb3JpdHldKTtcbiAgICAgICAgZmlyc3REaXYyLnRleHRDb250ZW50ID0gdGhpcy5wcmlvcml0eTtcbiAgICBcbiAgICAgICAgZmlyc3REaXYuYXBwZW5kQ2hpbGQoZmlyc3REaXYxKTtcbiAgICAgICAgZmlyc3REaXYuYXBwZW5kQ2hpbGQoZmlyc3REaXYyKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGZpcnN0RGl2KTtcbiAgICBcbiAgICAgICAgbGV0IHRoaXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcmREaXYuY2xhc3NMaXN0LmFkZChcInByb2dyZXNzLWJhclwiKTtcbiAgICAgICAgbGV0IHRoaXJkRGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcm9ncmVzc1wiKTtcbiAgICAgICAgdGhpcmREaXYxLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRoaXMuY291bnRDb21wbGV0ZSgpKTtcbiAgICAgICAgdGhpcmREaXYxLnNldEF0dHJpYnV0ZShcIm1heFwiLCB0aGlzLnRhc2tMaXN0Lmxlbmd0aCk7XG4gICAgXG4gICAgICAgIHRoaXJkRGl2LmFwcGVuZENoaWxkKHRoaXJkRGl2MSk7XG4gICAgICAgIGxldCB0aGlyZERpdjIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcdTAwQTBcIiArIHRoaXMuY291bnRDb21wbGV0ZSgpICsgXCIgLyBcIiArIHRoaXMudGFza0xpc3QubGVuZ3RoKTtcbiAgICAgICAgdGhpcmREaXYuYXBwZW5kQ2hpbGQodGhpcmREaXYyKTtcbiAgICBcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRoaXJkRGl2KTtcbiAgICBcbiAgICAgICAgbGV0IGZvdXJ0aERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZvdXJ0aERpdi5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XG4gICAgXG4gICAgICAgIGxldCBmb3VydGhEaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZm91cnRoRGl2MS5zcmMgPSBjYWxlbmRhcjtcbiAgICAgICAgZm91cnRoRGl2MS5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgICBcbiAgICAgICAgbGV0IGZvdXJ0aERpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmb3VydGhEaXYyLnRleHRDb250ZW50ID0gdGhpcy5kdWVEYXRlO1xuXG4gICAgICAgIGZvdXJ0aERpdi5hcHBlbmRDaGlsZChmb3VydGhEaXYxKTtcbiAgICAgICAgZm91cnRoRGl2LmFwcGVuZENoaWxkKGZvdXJ0aERpdjIpO1xuICAgIFxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZm91cnRoRGl2KTtcbiAgICBcbiAgICAgICAgbGV0IGZpZnRoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmlmdGhEaXYuY2xhc3NMaXN0LmFkZChcImVkaXQtb3B0aW9uc1wiKTtcblxuICAgICAgICBsZXQgZmlmdGhEaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZmlmdGhEaXYxLnNyYyA9IGNoZWNrQmxhbmtDaXJjbGU7XG4gICAgICAgIGZpZnRoRGl2MS5pZCA9IFwiZWRpdC1vcHRpb24tY2hlY2tcIjtcbiAgICAgICAgZmlmdGhEaXYxLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuXG4gICAgICAgIGxldCBmaWZ0aERpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBmaWZ0aERpdjIuc3JjID0gdHJhc2hDYW47XG4gICAgICAgIGZpZnRoRGl2MS5pZCA9IFwiZWRpdC1vcHRpb24tZGVsZXRlXCI7XG4gICAgICAgIGZpZnRoRGl2MS5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcblxuICAgICAgICBmaWZ0aERpdi5hcHBlbmRDaGlsZChmaWZ0aERpdjEpO1xuICAgICAgICBmaWZ0aERpdi5hcHBlbmRDaGlsZChmaWZ0aERpdjIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZmlmdGhEaXYpO1xuICAgIFxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cblxuICAgIGh0bWxBY3RpdmVQcm9qZWN0KCl7XG5cbiAgICAgICAgbGV0IGRpdiA9IHRoaXMuaHRtbFByb2plY3Q7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RcIik7XG5cbiAgICAgICAgcmVmTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyB0aGlzLnRpdGxlICsgXCI+LnByb2dyZXNzLWJhclwiKTtcblxuICAgICAgICBsZXQgc2Vjb25kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2Vjb25kRGl2LmNsYXNzTGlzdC5hZGQoXCJub3Rlc1wiKTtcbiAgICAgICAgc2Vjb25kRGl2LnRleHRDb250ZW50ID0gUHJvamVjdC5kZXNjcmlwdGlvbjtcblxuICAgICAgICBkaXYuaW5zZXJ0QmVmb3JlKHNlY29uZERpdiwgcmVmTm9kZSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RMaXN0IHtcbiAgICBwcm9qZWN0TGlzdDtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0TGlzdCA9ICgpPT57XG4gICAgICAgIHJldHVybiBwcm9qZWN0TGlzdDtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0ID0gKG5hbWUpPT57XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gobmFtZSk7XG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZVByb2plY3QgPSAoe25hbWV9KT0+e1xuICAgICAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKGVsZW1lbnQsIChlbGVtZW50KT0+e1xuICAgICAgICAgICAgaWYoZWxlbWVudC5uYW1lID09IG5hbWUpe1xuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0LnBvcChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IGNhbGVuZGFyIGZyb20gXCIuL0Fzc2V0cy9JbWFnZXMvY2FsZW5kYXItd2hpdGUuc3ZnXCI7XG5pbXBvcnQgY2hlY2tCbGFua0NpcmNsZSBmcm9tIFwiLi9Bc3NldHMvSW1hZ2VzL2NoZWNrLWJsYW5rLWNpcmNsZS13aGl0ZS5zdmdcIjtcbmltcG9ydCB0cmFzaENhbiBmcm9tIFwiLi9Bc3NldHMvSW1hZ2VzL3RyYXNoLWNhbi13aGl0ZS5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgdGl0bGU7XG4gICAgZGVzY3JpcHRpb247XG4gICAgZHVlRGF0ZTtcbiAgICBwcmlvcml0eTtcbiAgICBzdGF0dXM7XG4gICAgI3JlY2VudDtcbiAgICBwcm9qZWN0O1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xuICAgICAgICByZWNlbnQgPSAwO1xuICAgIH1cblxuICAgIGdldCB0aXRsZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgZ2V0IGR1ZURhdGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgICB9XG4gICAgZ2V0IHJlY2VudCgpe1xuICAgICAgICByZXR1cm4gdGhpcy4jcmVjZW50O1xuICAgIH1cblxuICAgIHVwZGF0ZVN0YXR1cygpe1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHRydWU7XG4gICAgfVxuXG4gICAgaHRtbE5vdGUoKXtcblxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xuICAgICAgICBkaXYuaWQgPSB0aGlzLnRpdGxlO1xuICAgIFxuICAgICAgICBsZXQgZmlyc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmaXJzdERpdi5jbGFzc0xpc3QuYWRkKFwiZmlyc3QtZGl2XCIpO1xuICAgICAgICBsZXQgZmlyc3REaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmlyc3REaXYxLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuICAgICAgICBmaXJzdERpdjEudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xuICAgIFxuICAgICAgICBsZXQgZmlyc3REaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmlyc3REaXYyLmNsYXNzTGlzdC5hZGQoW1wicHJpb3JpdHlcIiwgdGhpcy5wcmlvcml0eV0pO1xuICAgICAgICBmaXJzdERpdjIudGV4dENvbnRlbnQgPSB0aGlzLnByaW9yaXR5O1xuICAgIFxuICAgICAgICBmaXJzdERpdi5hcHBlbmRDaGlsZChmaXJzdERpdjEpO1xuICAgICAgICBmaXJzdERpdi5hcHBlbmRDaGlsZChmaXJzdERpdjIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZmlyc3REaXYpO1xuXG4gICAgICAgIGxldCBzZWNvbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzZWNvbmREaXYuY2xhc3NMaXN0LmFkZChcIm5vdGVzXCIpO1xuICAgICAgICBzZWNvbmREaXYudGV4dENvbnRlbnQgPSBQcm9qZWN0LmRlc2NyaXB0aW9uO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc2Vjb25kRGl2KTtcbiAgICBcbiAgICAgICAgbGV0IGZvdXJ0aERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZvdXJ0aERpdi5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XG4gICAgXG4gICAgICAgIGxldCBmb3VydGhEaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZm91cnRoRGl2MS5zcmMgPSBjYWxlbmRhcjtcbiAgICAgICAgZm91cnRoRGl2MS5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgICBcbiAgICAgICAgbGV0IGZvdXJ0aERpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmb3VydGhEaXYyLnRleHRDb250ZW50ID0gdGhpcy5kdWVEYXRlO1xuXG4gICAgICAgIGZvdXJ0aERpdi5hcHBlbmRDaGlsZChmb3VydGhEaXYxKTtcbiAgICAgICAgZm91cnRoRGl2LmFwcGVuZENoaWxkKGZvdXJ0aERpdjIpO1xuICAgIFxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZm91cnRoRGl2KTtcbiAgICBcbiAgICAgICAgbGV0IGZpZnRoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmlmdGhEaXYuY2xhc3NMaXN0LmFkZChcImVkaXQtb3B0aW9uc1wiKTtcblxuICAgICAgICBsZXQgZmlmdGhEaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZmlmdGhEaXYxLnNyYyA9IGNoZWNrQmxhbmtDaXJjbGU7XG4gICAgICAgIGZpZnRoRGl2MS5pZCA9IFwiZWRpdC1vcHRpb24tY2hlY2tcIjtcbiAgICAgICAgZmlmdGhEaXYxLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuXG4gICAgICAgIGxldCBmaWZ0aERpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBmaWZ0aERpdjIuc3JjID0gdHJhc2hDYW47XG4gICAgICAgIGZpZnRoRGl2MS5pZCA9IFwiZWRpdC1vcHRpb24tZGVsZXRlXCI7XG4gICAgICAgIGZpZnRoRGl2MS5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcblxuICAgICAgICBmaWZ0aERpdi5hcHBlbmRDaGlsZChmaWZ0aERpdjEpO1xuICAgICAgICBmaWZ0aERpdi5hcHBlbmRDaGlsZChmaWZ0aERpdjIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZmlmdGhEaXYpO1xuICAgIFxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCBhY3RpdmVQcm9qZWN0IGZyb20gJy4vYWN0aXZlX3Byb2plY3QuanMnO1xuaW1wb3J0IHsgY3JlYXRlVGFzaywgY3JlYXRlUHJvamVjdCwgY2hlY2tEYXRlIH0gZnJvbSBcIi4vZm9ybS5qc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IFByb2plY3RMaXN0IGZyb20gJy4vcHJvamVjdF9MaXN0LmpzJztcblxuXG5cblxuXG5cblxuY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xuY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzXCIpO1xuY29uc3QgZGFzaGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuY29uc3QgY3JlYXRlTm90ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLW5vdGVcIik7XG5jb25zdCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtcHJvamVjdFwiKTtcbmNvbnN0IHRhc2tDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stY2FuY2VsXCIpO1xuY29uc3QgdGFza1N1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1zdWJtaXRcIik7XG5cbmNvbnN0IGN1cnJlbnRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXNlY3Rpb25cIik7XG5jb25zdCByZWNlbnRQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVjZW50LXByb2plY3RzXCIpO1xuY29uc3QgcmVjZW50Tm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlY2VudC1ub3Rlc1wiKTtcbmNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtcHJvamVjdHNcIik7XG5jb25zdCBhbGxOb3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLW5vdGVzXCIpO1xuY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLWZvcm1cIilcblxuXG52YXIgc3VibWl0ID0gXCJcIjtcblxuXG5jb25zdCB1cGRhdGVTY3JlZW5EYXNoYm9hcmQgPSAoKT0+e1xuICAgIHJlY2VudFByb2plY3RzLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgcmVjZW50Tm90ZXMuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBhbGxQcm9qZWN0cy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGFsbE5vdGVzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgY3JlYXRlTm90ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIGNyZWF0ZVByb2plY3RCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuICAgIGRpc3BsYXlSZWNlbnRQcm9qZWN0cygpO1xuICAgIGRpc3BhbHlSZWNlbnROb3RlcygpO1xufVxuXG5jb25zdCB1cGRhdGVTY3JlZW5Qcm9qZWN0cyA9ICgpPT57XG4gICAgcmVjZW50UHJvamVjdHMuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICByZWNlbnROb3Rlcy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGFsbFByb2plY3RzLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgYWxsTm90ZXMuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBjcmVhdGVOb3RlQnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgY3JlYXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG4gICAgZGlzcGxheVByb2plY3RzKHByb2plY3RMaXN0KTtcbn1cblxuY29uc3QgdXBkYXRlU2NyZWVuTm90ZXMgPSAoKT0+e1xuICAgIHJlY2VudFByb2plY3RzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgcmVjZW50Tm90ZXMuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBhbGxQcm9qZWN0cy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGFsbE5vdGVzLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgY3JlYXRlTm90ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIGNyZWF0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICAgIGRpc3BsYXlOb3Rlcyhub3RlTGlzdCk7XG59XG5cbmRhc2hib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXBkYXRlU2NyZWVuRGFzaGJvYXJkKVxuXG5wcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXBkYXRlU2NyZWVuUHJvamVjdHMpXG5cbm5vdGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGRhdGVTY3JlZW5Ob3RlcylcblxuY3JlYXRlTm90ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcblxuICAgIHN1Ym1pdCA9IFwibm90ZVwiO1xuXG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGVudFwiKS5jbGFzc0xpc3QuYWRkKFwiYmx1ci1maWx0ZXJcIik7XG4gICAgZGFzaGJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGRhdGVTY3JlZW5EYXNoYm9hcmQpO1xuICAgIHByb2plY3RzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGRhdGVTY3JlZW5Qcm9qZWN0cyk7XG4gICAgbm90ZXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZVNjcmVlbk5vdGVzKTtcbn0pXG5cbmNyZWF0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG5cbiAgICBzdWJtaXQgPSBcInByb2plY3RcIjtcblxuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRlbnRcIikuY2xhc3NMaXN0LmFkZChcImJsdXItZmlsdGVyXCIpO1xuICAgIGRhc2hib2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXBkYXRlU2NyZWVuRGFzaGJvYXJkKTtcbiAgICBwcm9qZWN0cy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXBkYXRlU2NyZWVuUHJvamVjdHMpO1xuICAgIG5vdGVzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGRhdGVTY3JlZW5Ob3Rlcyk7XG59KVxuXG50YXNrQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRlbnRcIikuY2xhc3NMaXN0LnJlbW92ZShcImJsdXItZmlsdGVyXCIpO1xuICAgIGRhc2hib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXBkYXRlU2NyZWVuRGFzaGJvYXJkKTtcbiAgICBwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXBkYXRlU2NyZWVuUHJvamVjdHMpO1xuICAgIG5vdGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGRhdGVTY3JlZW5Ob3Rlcyk7XG59KVxuXG50YXNrU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcblxuICAgIGlmKCFjaGVja0RhdGUoKSl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRheVwiKS5zZXRDdXN0b21WYWxpZGl0eShcIkludmFsaWQgRGF0ZVwiKTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYoc3VibWl0ID09IFwibm90ZVwiKVxuICAgICAgICAgICAgY3JlYXRlVGFzaygpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0KCk7XG5cbiAgICAgICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRlbnRcIikuY2xhc3NMaXN0LnJlbW92ZShcImJsdXItZmlsdGVyXCIpO1xuICAgICAgICBkYXNoYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZVNjcmVlbkRhc2hib2FyZCk7XG4gICAgICAgIHByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGRhdGVTY3JlZW5Qcm9qZWN0cyk7XG4gICAgICAgIG5vdGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGRhdGVTY3JlZW5Ob3Rlcyk7XG5cbn0pXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=