// let num = 121;
// let rev = 0;
// let orignalNumber = num;
// while(num > 0){
//     let lastDigit = num % 10;
//     rev = rev * 10 + lastDigit;
//     num = Math.floor(num/10);
// }

//Armstrong number - sum of cubes of each digit is equal to orignal number
// console.log("num variable value ",num);
// console.log("Original Number ",orignalNumber);
// console.log("reverse number ",rev);
// if(orignalNumber == rev){
//     console.log("Palindrome number");
// }else{
//     console.log("Not a Palindrome number");
// }

// console.log(rev);


// palindrome number
// 121 -> 121


//Armstrong number - sum of cubes of each digit is equal to orignal number
/* 
153 -> 3**3 + 5**3 + 1**3 = 153 --> Armstrong Number  

*/

// let num = 121;
// let sumOfCubes = 0;
// let rev = 0;
// let copyNumber = num;
// while(num > 0){
//     let lastDigit = num % 10;
//     sumOfCubes = sumOfCubes + lastDigit**3;
//     rev = rev * 10 + lastDigit;
//     num = Math.floor(num/10);
// }

// if(sumOfCubes == copyNumber){
//     console.log("Number is armstrong ",copyNumber);
//     console.log("Sum of Cubes ",copyNumber);
// }else{
//     console.log("Number is  not armstrong ",copyNumber);
//     console.log("Sum of Cubes ",sumOfCubes);
// }

// if(copyNumber == rev){
//     console.log("Number is Palindrome ",copyNumber);
// }else{
//     console.log("Number is  not Palindrome ",copyNumber);
// }

// let names = ['Danish','Saif','Umair']
// // console.log(names.length);
// console.log(names[0]);
// console.log("Before ",names);

// names[0] = 'Mohd Danish';
// console.log("After ",names);

let languages = ["Java","Java Script","Python","C","C++"];
let otherLanguages = ["Go lang","Ruby","CS"]


// console.log(languages + otherLanguages);

// let newArr = languages.concat(otherLanguages);

// console.log(newArr);

// console.log(languages.includes("python"));

// console.log(languages.join(":"));




// languages.splice(2,0,"Go Lang");
// languages.pop();
// languages.push("Go Lang");
// languages.shift();
// let arr = languages.slice(1,4);
// console.log(arr);

// let idx = languages.indexOf("Python",3);
// console.log(idx);

// let lastIdx = languages.lastIndexOf("Python");
// console.log(lastIdx);

// let len = languages.length;

// for(let i =0;i<len;i++){
//     console.log(languages[i]);
// }

