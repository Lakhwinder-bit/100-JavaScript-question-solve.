// Problem: Count Vowels in a String

let Vowels = ["a", "e", "i", "o", "u"];
let Count = 0;
let string = "helloro"
let res = string.split("");
res.forEach((val)=>{
if(Vowels.includes(val)){
    Count++
}
})
console.log(Count)

