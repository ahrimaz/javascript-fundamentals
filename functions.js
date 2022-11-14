// function greet(text) {
//   console.log("welcome to our website " + text);
// }

// function signUp() {
//   let name = prompt("what is ur name ");
//   greet(name);
// }

// signUp();

function max(num1 = 0, num2 = 0) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

let inbox = max(5);
console.log(inbox);
