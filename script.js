const input = document.querySelector('.input');
const addButton = document.querySelector('.button');
const container = document.querySelector('.todos-container');
const toggleBtn = document.getElementById('toggle');
let dataArray = [];

function populateDOM(item) {
  dataArray.push(item);
  appendItem(item);
}

function remove(e) {
  e.target.parentNode.remove();
  let siblingText = e.target.parentNode.querySelector('label').innerText;
  const found = dataArray.find(el => el.task == siblingText);
  found ? (dataArray.splice(dataArray.indexOf(found), 1)) : null;
}

let appendItem = (item) => {
  const todo = document.createElement('LI');
  todo.className = 'checkbox-container';
  // Create checkbox input
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const uniqueId = "task-" + Date.now(); // Unique ID
  checkbox.id = uniqueId;
  checkbox.checked = `${item.completed ? 'checked' : ''}`;

  // Create label
  const label = document.createElement("label");
  label.htmlFor = uniqueId; // Link label to input
  label.textContent = `${item.task}`;

  // Create image
  const img = document.createElement("img");
    img.className = "cross";
    img.src = "images/close-outline.svg";

  // Add click event to remove li when X is clicked
  img.addEventListener("click", (e) => remove(e));  

  todo.appendChild(checkbox);
  todo.appendChild(label); 
  todo.appendChild(img);

  container.appendChild(todo);
}

let pushArray = () => {
  let obj = {
    task: `${input.value}`,
    completed: false
  };
  obj.task ? populateDOM(obj) : null;
  input.value = "";
}
const handleToggle = (e) => {
  // determine whether to show or hide completed todos based on the button text
  let displayAll = e.target.textContent === 'Show completed';
  // update the `data-completed` attribute on the container
  container.dataset.completed = displayAll;

  // update the button text
  e.target.textContent = displayAll ? 'Hide completed' : 'Show completed';
}

function main() {
  input.value = "";

  addButton.addEventListener('click', pushArray);

  input.addEventListener('keydown', 
                        (e) => e.key ==='Enter' ?
                               pushArray() :
                               null);

  toggleBtn.addEventListener('click', handleToggle);
}

window.addEventListener('load', main);

