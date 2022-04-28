const listDOM = document.querySelector("#list");
const taskDOM = document.querySelector("#task");
const liDOM = document.getElementsByTagName("li");


// add new task
function newElement() {
  if (taskDOM.value.trim() =="") {
    $(".error").toast("show"); // if task
  } else {
    $(".success").toast("show");
    let liDOM = document.createElement("li");
    listDOM.appendChild(liDOM);
    liDOM.innerHTML = task.value;
    save(liDOM);
    taskDOM.value = "";

    liDOM.onclick = check;

    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;

    liDOM.append(closeButton);
    listDOM.append(liDOM);
    task.value = "";
  }
}

let taskList = [];

function save(item) {
  taskList.push(item.innerText.slice(0, item.innerText.length - 1));
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

// remove task
function removeButton(item) {
  this.parentElement.remove();
  taskList = JSON.parse(localStorage.getItem("taskList"));
  let li = taskList.indexOf(item.innerHTML);
  taskList.splice(li, 1);
  localStorage.setItem("taskList", JSON.stringify(taskList));
}
function check() {
    this.classList.toggle("checked");
  }
  

function lastListDOM() {
  let items = JSON.parse(localStorage.getItem("taskList"));
  if (items?.length>0){
    for(let i=0;i<items.length;i++){
        let liDOM=document.createElement("li")
        let closeButton=document.createElement("span")
        liDOM.innerHTML=items[i]
        closeButton.textContent = "\u00D7";
        closeButton.onclick = removeButton;
        closeButton.classList.add("close")
        liDOM.appendChild(closeButton)
        listDOM.append(liDOM) 
        save(liDOM);
        liDOM.onclick = check;
    }
}
}
lastListDOM();
