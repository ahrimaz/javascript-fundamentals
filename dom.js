// // const headers = document.getElementsByTagName("h2");
// // const list = document.getElementsByClassName("item");
// // const button = document.getElementById("submit");

// // console.log(headers[0]);
// // console.log(list.length);
// // console.log(button);

// // const headers = document.querySelector("h2");
// // const list = document.querySelector("#submit");

// // console.log(list);
// // console.log(headers[0]);

// //html collection can only hold node elements
// //nodelists can hold different types (elements, node text, node commas)

// const collectionItems = document.getElementsByClassName("item");
// const todoList = document.getElementById("todo-list");
// const todoNr = document.getElementsByClassName("todo-nr")[0];

// const newItem = document.createElement("li");
// newItem.classList.add("item");
// newItem.innerText = "Item 3";

// todoList.appendChild(newItem);

// //Update the amount of items that we have
const todoList = document.querySelector("#todo-list");
const items = todoList.children;
console.log(items);
const todoNr = document.querySelector(".todo-nr");

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 3";

const anotherItem = document.createElement("li");
anotherItem.classList.add("item");
anotherItem.innerText = "Item 4";

todoList.appendChild(newItem);
todoList.appendChild(anotherItem);

todoNr.innerText = items.length;

console.log(items);
