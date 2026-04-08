// Write a JavaScript function that determines if a given number is even or odd.



// Frist Answer ----->
// function CheckNumber(num){
//     if(num % 2 === 0){
//         console.log(`${num} is Even Number`)
//     }
//     else{
//         console.log(`${num} is Odd Number`)
//     }
// }
// CheckNumber(10);




//Second Answer ---->
function CheckNumber(num) {
  if (num % 2 === 0) {
    return `${num} is Even Number`;
  } else {
    return `${num} is Odd Number`;
  }
}
let result = CheckNumber(1110);
console.log(result);
