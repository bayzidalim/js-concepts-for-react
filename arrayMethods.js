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

/* product.forEach(product=>console.log(product));
product.forEach(product=>console.log(product.color));

product.forEach(product=>{

}) */

// filter

const cheap=product.filter(product=>product.price<=1000);
console.log(cheap);


const spacificName=product.filter(p=>p.name.includes('n'));
console.log(spacificName);

// find

const spacial=product.find(p=>p.name.includes('n'));

console.log(spacial);