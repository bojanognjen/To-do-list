const container = document.getElementById('todos-container');

const appendItem = (item) => {
    const todo = document.createElement('LI');
    todo.innerHTML = `
      <input type="checkbox" ${item.completed ? 'checked' : ''} />
      <span>${item.task}</span>
      <img class="cross" src="images/cross.png"></img>
    `
    container.appendChild(todo);
  };

// append the data to the DOM
const populateDOM = (data) => {

  data.forEach(appendItem);

}

// fetch the JSON data
fetch('data.json').then((response) => {
  if(!response.ok) return console.log('Oops! Something went wrong.');

  return response.json();
}).then((data) => {
  // handle the data
  populateDOM(data);
});

const toggleBtn = document.getElementById('toggle');

const handleToggle = (e) => {
  // determine whether to show or hide completed todos based on the button text
  let displayAll = e.target.textContent === 'Show completed';
  console.log(displayAll);
  // update the `data-completed` attribute on the container
  container.dataset.completed = displayAll;

  // update the button text
  e.target.textContent = displayAll ? 'Hide completed' : 'Show completed';
}

toggleBtn.addEventListener('click', handleToggle);