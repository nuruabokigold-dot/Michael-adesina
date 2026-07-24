const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let tasks = [];

addTask.addEventListener("click", addNewTask);

function addNewTask() {

const task = taskInput.value.trim();

if(task === ""){
alert("Please enter a task.");
return;
}

tasks.push(task);

displayTask(task);

taskInput.value = "";

}

function displayTask(task){

const li = document.createElement("li");

li.textContent = task;

const completeBtn = document.createElement("button");

completeBtn.textContent = "Complete";

completeBtn.onclick = function(){

li.classList.toggle("completed");

};

const deleteBtn = document.createElement("button");

deleteBtn.textContent = "Delete";

deleteBtn.onclick = function(){

li.remove();

};

li.appendChild(completeBtn);

li.appendChild(deleteBtn);

taskList.appendChild(li);

}
