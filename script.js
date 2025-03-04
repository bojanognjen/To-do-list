const input = document.querySelector('.input');
const addButton = document.querySelector('.button');
const container = document.querySelector('.todos-container');
let dataArray = [];

function populateDOM(data) {
  container.innerHTML = "";
  data.forEach((item) => appendItem(item));
}

let appendItem = (item) => {
  const todo = document.createElement('LI');
   todo.innerHTML = `
     <input type="checkbox" ${item.completed ? 'checked' : ''} />
     <span>${item.task}</span>
     <img class="cross" src="images/cross.png"></img>
   `
  container.appendChild(todo);
}

let pushArray = () => {
  dataArray.push({
    task: `${input.value}`,
    completed: false
  });
  input.value = "";
  populateDOM(dataArray);
}

function main() {
  input.value = "";
  addButton.addEventListener('click', pushArray);
}

window.addEventListener('load', main)

