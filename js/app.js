function createTask(event) {
  event.preventDefault();
  // Getting the id 'newTask' and assigning it to the variable 'newtaskInput' to perform operations later
  const newTaskInput = document.getElementById("newTask");
  const newTaskText = newTaskInput.value; // Obtaining the text value of the input

  if (newTaskText !== "") { // If input is not empty
    const taskList = document.getElementById("taskList"); // Getting the container id of the task list
    //Getting "newTaskElement" and setting its content using innerHTML
    const newTaskElement = document.createElement("li");
    newTaskElement.classList.add("card");
    newTaskElement.innerHTML = 
      `<span class="task">${newTaskText}</span>
      <span class="btns">
        <button class="btnComplete" type="submit">Completar</button>
        <button class="btnDelete" type="submit">Eliminar</button>
      </span>`;
    // EventListener of the "Completar" button and setting its function
    const btnComplete = newTaskElement.querySelector(".btnComplete");
    btnComplete.onclick = function () {
      const taskTextElement = newTaskElement.querySelector(".task");
      taskTextElement.classList.toggle("completed");
    };
    // EventListener of the "Delete" button and setting its function
    const btnDelete = newTaskElement.querySelector(".btnDelete");
    btnDelete.onclick = function () {
      taskList.removeChild(newTaskElement);
    };

    taskList.appendChild(newTaskElement);// Adding the newTaskElement to the taskList
    newTaskInput.value = ""; // Clearing the value of newTaskInput after adding the new task

  }
}
