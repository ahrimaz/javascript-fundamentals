//GLOBAL SCOPE
//BASICALLY NEVER USE VAR
//var x = 5;

//FUNCTION SCOPE
function store() {
  //CANNOT BE SEEN OUTSIDE OF THIS FUNCTION
  let food = "apple";
  let fruits = 5;

  if (true) {
    console.log(food);
  }
}

store();

//BLOCK SCOPE
// for (var x = 0; x < 10; x++) {
//   console.log(x);
// }
// if (true) {
//   console.log(food);
// }

// if (true) {
//   let food = "kiwi";
// }
// console.log(food, x);
// store();
// console.log("Global " + x);
