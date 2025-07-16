// let year = 2016;

// if(year % 4 == 0){
//     if(year % 100 == 0){
//         if(year % 400 == 0){
//             console.log("Entered year is a leap year",year);
//         }else{
//             console.log("Entered year is not a leap year",year);
//         }
//     }else{
//         console.log("Entered year is a leap year",year);
//     }
// }else{
//     console.log("Entered year is not a leap year",year);
// }

/*
1 - 4 , 100, 400 => leap year
2 - 4 only but not 100 => leap year
*/

// if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
//     console.log("Entered year is a leap year",year);
// }else{
//     console.log("Entered year is not a leap year",year);
// }

// let amount = prompt("Enter amount");
// let discountedAmount = 0;
// if (amount >= 1000) {
//     discountedAmount = amount - (amount * 20) / 100;
//     console.log("Discounted amount ", discountedAmount);
// } else if (amount >= 500 && amount < 1000) {
//     discountedAmount = amount - (amount * 10) / 100;
//     console.log("Discounted amount ", discountedAmount);
// } else {
//     console.log("No discount");
// }


let number1 = prompt("Enter 1st value : ");
let number2 = prompt("Enter 2nd value : ");
console.log("Number before swapping",number1,number2);
let temp = number2;
number2 = number1;
number1 = temp;
console.log("Number after swapping",number1,number2);

