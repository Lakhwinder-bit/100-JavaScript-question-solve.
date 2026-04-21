// Question -4: Second Largest Number---->
// [10, 5, 8, 20] → 10
// let num = [10, 15, 8, 20];
// let largest = -Infinity;
// let second = -Infinity;

// for(let i = 0 ; i < num.length ; i++){
//     let current = num[i]
//     if(current > largest){
//        second = largest;
//       largest = current;
//     }
//     else if( current > second && current !== largest){
//         second = current
//     }
// }
// console.log(second)

// function largestNum(num){
//   let largest = -Infinity;
//   let second = -Infinity;

//   for(let i = 0; i < num.length; i++){
//     let current = num[i];

//     if(current > largest){
//       second = largest;
//       largest = current;
//     }
//     else if(current > second && current !== largest){
//       second = current;
//     }
//   }

//   console.log(largest)
//   console.log(second)
// }

// largestNum([1 , 15 ,7 ,6])


// function largestNum(num){
// let largest = -Infinity;
// let second = -Infinity;

// for(let i = 0; i < num.length; i++){
//     let current = num[i]
//     if(current > largest){
//     second = largest;
//     largest = current;
//     }
//        else if( current > second && current !== largest){
//         second = current
//     }
// }


// return second
// }
// console.log(largestNum([1 , 5 ,7 ,6]));