const numbers=[89,34,534,44];
const student={
    name:'Salib khan',
    age:32,
    movies:['king khan','Dhakar mastan']
};

const about=`My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

// arrow function

const getFiftyFive=()=>{
    55;
}


const addSixtyFive=num=>num+65;

const isEven=x=>x%2==0;

const addThree=(x,y,z)=>x+y+z;

const doMath=(num1,num2)=>{
    const sum=num1+num2;
    return sum;
}

// spread operator

const newNumbers=[...numbers]
const currentNumbers=[...numbers,55];

newNumbers.push(99);
newNumbers.push(99);
newNumbers.push(99);

console.log(newNumbers);

// create a new array from an older array and add an element


console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
