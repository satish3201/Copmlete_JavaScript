let title = document.getElementById("title");
let description = document.getElementById("description");
let container = document.querySelector(".container");

let editMode = false;   
let currentTask = null; 

function addTodo() {
  let taskTitle = title.value.trim();
  let taskDesc = description.value.trim();

  if (taskTitle === "" && taskDesc === "") {
    alert("Please enter a task or description!");
    return;
  }

  if (editMode && currentTask) {
    currentTask.querySelector(".task-text").innerHTML = `<strong>${taskTitle}</strong><br><small>${taskDesc}</small>`;
    editMode = false;
    currentTask = null;
    document.getElementById("submit").innerText = "Submit"; 
  } 
  else {
    let li = document.createElement("li");

    let taskText = document.createElement("div");
    taskText.classList.add("task-text");
    taskText.innerHTML = `<strong>${taskTitle}</strong><br><small>${taskDesc}</small>`;

    let actions = document.createElement("div");
    actions.classList.add("actions");

    let completeBtn = document.createElement("button");
    completeBtn.classList.add("complete");
    completeBtn.innerHTML = "✅";
    completeBtn.onclick = () => {
      taskText.classList.toggle("completed");
    };

    let updateBtn = document.createElement("button");
    updateBtn.classList.add("update");
    updateBtn.innerHTML = "✏️";
    updateBtn.onclick = () => {
      title.value = taskTitle;
      description.value = taskDesc;
      editMode = true;
      currentTask = li;
      document.getElementById("submit").innerText = "Update"; 
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.onclick = () => {
      li.remove();
    };

    
    actions.appendChild(completeBtn);
    actions.appendChild(updateBtn);
    actions.appendChild(deleteBtn);

    
    li.appendChild(taskText);
    li.appendChild(actions);

    
    container.appendChild(li);
  }


  title.value = "";
  description.value = "";
}
