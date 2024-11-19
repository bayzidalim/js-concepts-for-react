const numbers=[42,65];

const[x,y]=[42,65];

console.log(x,y);

function boxify(num1,num2){
    const nums=[num1,num2];
    return nums;
}
const [first,second]=[90,34];


console.log(boxify(90,34));

const student={
    name:'sakib khan',
    age:32,
    movies:['king khan','dhakar mastan']
}

const [firstMovie,secondMovie]=student.movies;

console.log(firstMovie);

// object destructuring

const shobji={
    name:'alu',age:14
}

const {name,age}={
    id:12,name:'alu',age:14
}
console.log(age);


const employee={
    ide:'vs code',designation:'developer',machine:'mac',languages:['html','css','js'],spacification:{height:66,weight:67,watch:{color:'black',price:500}}
}


const {machine,ide}=employee;
console.log(machine);

const {color,price}=employee.spacification.watch;

console.log(color,price);




