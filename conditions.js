// 1 = assigns
const name = "bababimbo";
// double equals (==) compares, returns true/false
console.log(5 == 5);
// != is not equals
console.log(5 != 5);
console.log(2 != 3);
// > is greater than
console.log(5 > 10);
// < is less than
console.log(5 < 10);
// >= greater than or equal to
console.log(2 >= 3);
// <= less than or equal to
console.log(2 <= 3);
// === checks the datatype when comparing
//NEVER EVER USE DOUBLE EQUALS ==
//USE TRIPLE EQUALS ===
console.log(10 == "10");
console.log(10 === "10");
//
// const access = false;
// const age = 15;
// const bank = 20;
// // && means "and"
// // || pipebars means "or"
// // ! means "not"
// if (age >= 50) {
//   console.log("hello");
//   //everything under is skipped iffirst statement is true
// } else if (bank > 30) {
//   console.log("cool you have enough money");
// } else {
//   console.log("you are either too young or too poor");
// }

//FALSE, 0, "", null, undefined, NaN are all falsey values
const age = 0;
if (age) {
  console.log("this value is truthy");
} else {
  console.log("this value is falsey");
}
