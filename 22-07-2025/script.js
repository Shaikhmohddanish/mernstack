// function reverse(num){
//     let rev = 0;
//     while(num > 0){
//         let lastDigit = num % 10;
//         rev = rev * 10 + lastDigit;
//         num = Math.floor(num/10);
//     }
//     return rev;
// }

// console.log(reverse(123));

// 
// danish -> hsinad

// function reverseString(value){
//     let length = value.length;
//     let reverse = "";
//     for(let i = length - 1;i>=0;i--){
//         reverse = reverse + value[i];
//     }
//     return reverse;
// }


// console.log(reverseString("Danish"));


// Calculate log base 10 of 321
// console.log("log₁₀(321) =", Math.log10(321));

/*
1 - If number is multiple of 7
2 - print squrares of number 1 to 10
3 - print first 10 multiples of any number n
4 - print number from 50 to 40 in reverse order
5 - check if number is positive and even
6 - print sum of odd number from 1 to 100
7 - count how many number between 1 to 100 are divisible by 3
*/


// function armstrongNumber(num){
//     let originalNumber = num;
//     let sum = 0;
//     while(num>0){
//         let lastDigit = num%10;
//         sum = sum + lastDigit**3;
//         num = Math.floor(num/10);
//     } 
//     // console.log(num);
//     return originalNumber==sum;
// }


// console.log(armstrongNumber(15));


// aeiou AEIOU
// danish
// Amaan
function isVowels(word){
    let vowels = "aeiouAEIOU";
    for(let i = 0;i<word.length;i++){
        if(vowels.includes(word[i])){
            return true
        }
    }
    return false;
}

// console.log(isVowels("xyz"));

// function countVowels(word){
//     let vowels = "aeiouAEIOU";
//     let count = 0;
//     for(let i = 0;i<word.length;i++){
//         if(vowels.includes(word[i])){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("asdfghjkl"));
