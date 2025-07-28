// let str1 = "Danish using double quote";
// let str2 = 'Danish using single quote';
// let str3 = `Danish using backticks`;

// let sum = 10;
// let str = "Danish";
// String concatination (Concat)
// let printValue = "The sum of product is " + sum;

// let str = "Dosen't";

// console.log(printValue);

// let num1 = "1";
// let num2 = 2;

// let sum = num1 + num2;
// console.log(sum);

// let price = 120;
// let printValue = `The price of Product is ${price}`;
// console.log(printValue);
// console.log(str1);
// console.log(str2);
// console.log(str3);

// let bio = "Hello World";
// console.log(bio.length);
// console.log(bio.toUpperCase());
// console.log(bio.toLowerCase());
// console.log(bio.charAt(6));
// console.log(bio.indexOf("o"));
// console.log(bio.lastIndexOf("o"));
// console.log(bio.slice(6));


let student = {
    name: "Danish",
    subject : "Maths",
    "marks" : 97,
    isPass : true
}

let studentObject = new Object();
studentObject.name="Rumana";
// studentObject.subject="English";
// studentObject.marks=98; 
console.log(studentObject);

class Student {
    constructor(name, subject, marks, isPass) {
        this.name = name;
        this.subject = subject;
        this.marks = marks;
        this.isPass = isPass;
    }
}

let student1 = new Student("Danish","Maths",97,true);
console.log(student1);



// console.log(student["isPass"]);
// console.log(student.name);



