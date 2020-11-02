const element = document.getElementById("create-task-form")
const description = document.getElementById("new-task-description")
let list = []
let tasks = document.getElementById("tasks")


function createList(list) {
  tasks.innerHTML = ''
  for (let i = 0; i < list.length; i++) {
    let li = document.createElement("li");
    li.innerText = list[i];
    tasks.appendChild(li);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  element.addEventListener('submit', function(event) {
    event.preventDefault();
    list.push(description.value);
    event.target.reset();
    createList(list);
});

});
