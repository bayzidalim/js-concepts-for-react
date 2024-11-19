// stringyfy and parse

const student={
    name:'Salib khan',
    age:32,
    movies:['king khan','Dhakar mastan']
};

const studentJSON=JSON.stringify(student);
/* console.log(student);
console.log(studentJSON);

const studentObj=JSON.parse(studentJSON);
console.log(studentObj); */

// fetch

/* fetch('url')
.then(res=>res.json())
.then(data=>console.log(data)); */

// keys,values

const keys=Object.keys(student); //getting object keys as arrays
const values=Object.values(student);

console.log(keys);
console.log(values)

// for

const numbers=[23,54,67,87,23,22];
numbers.forEach(num=>console.log(num));

numbers.map(num=>num*2);

// for of on array like object
// loop on an object using for

// add or remove from or of array

const product=[
    {
        name:'Phone',brand:'samsung',color:'yellow',price:12000
    },
    {
        name:'Watch',brand:'Casio',color:'Black',price:1100
    },
    {
        name:'Earphone',brand:'oraimo',color:'white',price:800
    }
]

const newProduct={name:'webcam',price:700,brand:'apel'};

//copy products array and add newProduct

const newProducts=[...product,newProduct];

console.log(newProducts);

// create a new array without one specific item

// remove phone means create a new array without the phone

const reamaining=product.filter(p=>p.name!=='Phone');

console.log(reamaining);

