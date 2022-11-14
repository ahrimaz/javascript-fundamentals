//local storage

// localStorage.setItem("todo", "feed the cat");
// localStorage.setItem("user", "eric");
// localStorage.setItem("todo", "feed myself");

// //session storage

// sessionStorage.setItem("todoList", "session feeding cat");

//delete storage
//localStorage.clear();

//getting stuff back from storage
// const user = localStorage.getItem("user");

// console.log(typeof user);

const todoList = {
  todo1: "feeding the cat",
  todo2: "feeding myself",
};

localStorage.setItem("todos", JSON.stringify(todoList));

const retrieved = JSON.parse(localStorage.getItem("todos"));

console.log(retrieved);
