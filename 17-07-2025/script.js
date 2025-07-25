// let i=0
// console.log("Value of i is: " + i);
// console.log("Value of i post increment",i++);
// console.log("Value of i post decrement",i--);
// console.log("Value of i pre increment",++i);
// console.log("Value of i pre decrement",--i);
// console.log("Value of i after all operations",i);


// let x = 10;
// let y = x++;
// console.log(x);
// console.log(y);

// let m = 10;
// let n = ++m;
// console.log(m);
// console.log(n);


// let a = 2;
// let result = a++ + 3;
// console.log(result);


// let b = 2;
// let res = ++b + 3;
// console.log(res);


// let i = 5;
// console.log(i++ + ++i);

// let count = 3;
// if( --count > 2){
//     console.log(count);
    
// }else{
//     console.log("else",count);
    
// }

// let count = 5;
// console.log(++count + --count - ++count + ++count + count++);

// let i = 0;
// console.log("value of i before any increment or decrement",i);
// console.log("value of i pre increment",++i);
// console.log("value of i pre decrement",--i);
// console.log("value of i post increment",i++);
// console.log("value of i post decrement",i--);
// console.log("value of i after all operations",i);



// function fibonacci(n) {
//     let a = 0, b = 1, c;
//     if(n === 1) return a;
//     if(n === 2) return b;
//     for (let i = 3; i <= n; i++) {
//         c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }

// console.log(fibonacci(7)); 
// let result = (a,b) =>  a+b;

// // let result = add(2,4);
// console.log(result(2,4));

// // console.log(res(2,5));
// let double = number => number*2;
// console.log(double(9));

// a e i o u
function vowels(word){
    let count = 0;
    for(let i =0;i<word.length;i++){
        let alphabet = word[i];
        if(alphabet == 'a' || alphabet == 'e' || alphabet == 'i'
             || alphabet == 'o' || alphabet == 'u'){
                count++;
             }
    }
    return count;
}

console.log(vowels("hello world"));











