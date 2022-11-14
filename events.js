const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");
const items = todoList.children;
const mainTitle = document.querySelector(".main-title");
const nameInput = document.querySelector(".name-input");

//attach an event listener
//events are clicks, scrolls, scrolls, resizing browsers
button.addEventListener("click", function (e) {
  e.preventDefault();
  //create element
  const newItem = document.createElement("li");
  //adding class
  newItem.classList.add("item");
  //adding the text
  newItem.innerText = nameInput.value;
  todoList.appendChild(newItem);
  todoNr.innerText = items.length;
  //delete the value from the input
  nameInput.value = "";
  //create element and attach listener
  newItem.addEventListener("click", deleteItem);

  console.log(nameInput);
});

for (item of items) {
  item.addEventListener("click", deleteItem);
}

function deleteItem(e) {
  e.stopPropagation();
  e.target.remove();
}

todoList.addEventListener("click", function () {
  console.log("the ul activates");
  todoList.classList.toggle("fade");
});

// button.addEventListener("click", function (event) {
//   mainTitle.classList.toggle("spectacular");
// });
