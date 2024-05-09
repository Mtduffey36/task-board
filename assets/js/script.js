// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
//assign id to each task array
}

// Todo: create a function to create a task card
function createTaskCard(task) {
//go in the todo, in progress, and completed
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
//
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
//will need to attach to model some how
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
//will need boostrap card that has delete button
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
//bootstrap card that had user interaction 
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});

var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
})