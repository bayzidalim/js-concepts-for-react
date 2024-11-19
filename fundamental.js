/* Declare a variable using let and const */

const name1="arnold";
let season="Rainy";
season='winter';

// 6 basic conditions: <,>,===,==,!==,<=,>=
// multiple conditions &&,||,

if(name1==='arnold'||season ==='rainy'){

}
else if(name1){
console.log('name');
}
else{

}

/* =>Array Declaration
=>index
=>length,push, */

const number=[89,35,98,12];

number[0]=56;

// 4.for loop

for(let i=0;i<number.length;i++){
    const numbers=number[i];
    console.log(numbers);
}

// function

function multiply(num1,num2){
    const result=num1+num2;
    return result;
}


const output=multiply(35,78);

// 6 object
// 3 ways to access property by name

const student={
    name:'sakib khan',
    age:32,
    movies:['king khan','dhakar mastan']
}


const myVariable='age';

console.log(student.name); //direct access
console.log(student['age']); //access via property name string
console.log(student[myVariable]); //access via property name in a variable

