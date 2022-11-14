// const text = "kiwi";
// let fruitNum = 0;

// switch (text) {
//   case "banana":
//     console.log("wow banana good");
//     fruitNum = 1;
//     break;
//   case "apple":
//     console.log("apple is not banana");
//     fruitNum = 2;
//     break;
//   case "avocado":
//     fruitNum = 3;
//     console.log("what fruit is this");
//     break;
//   default:
//     console.log("what is fruit?");
// }

let userInput = prompt("enter a fruit");
let convertedValue = userInput.toLowerCase();

switch (convertedValue) {
  case "kiwi":
    alert("kiwi is first food invented by ocean boys");
    break;
  case "banana":
    alert("banana is good");
    break;
  case "apple":
    alert("apple is not banana or kiwi");
    break;
  default:
    alert("fruit please");
    break;
}
