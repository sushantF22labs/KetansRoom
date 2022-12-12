// Pure function 
// A function must pass two tests to be considered “pure”:

// Same inputs always return same outputs
// No side-effects

function cube(n){
    return n*n*n;
}
// console.log(cube(5));

//Higher order function 

// a function which takes another function as an argument or returns
//  a function is known as a higher order function
    // 1)map 2)filter 3)reduce
// 1)map:

    const num =[10,20,30];
    const num10=num.map(i=>i*10)
    // console.log(num10);
// 2)filter

    const flighs=[
        {name:"Chennai",status:true},
        {name:"Mumbai",status:true},
        {name:"Delhi",status:false},
        {name:"Bangalore",status:false},
    ]
    const reducee=flighs.filter(flighs=>flighs.status==true)
    // console.log(reducee);
//  3)reduce

    const amt=[10,20,30,40,50];
    const total=amt.reduce(function(acc,value){
            return acc+value
    })
    // console.log(total);
    
// Currying
// currying accept only one argument and return new function
function coffee(a) {
    return function(b){
        return function(c){
            return 
        }
    }
}

// console.log(coffee("sugar")("milk")("coffe"));
// ------------------------------------------------------------------------------------------------------------------------------------

let items=[
    {
        name:"shoe",
        price: 2000
    },
    {
        name:"Shirt",
        price: 1200
    },
    {
        name:"pant",
        price: 14000
    },
    {
        name:"bag",
        price: 2500
    }
]

  // pluck("price")
  let pluck = (value)=>(item) => {

    item.forEach(el => {
        console.log(el[value])
    });

    return item;
  }
    // console.log(pluck("name"));
  // Total
  let totals=(item)=>
    // console.log(item)
      item.reduce((ac,cVal) =>  {return ac + cVal.price} , 0)
  
//   console.log(totals());
  // Discount(10)
let discount=(perc)=>(total)=> {
    console.log(perc);
    console.log(total)
    var dis = total * (100-perc) / 100
    console.log('discount',dis)
    return dis
}

// console.log(discount(18));
  // tax(18.5)

let tax=(tx)=>(amount)=>{
    console.log('amount',amount)
    return amount * (100+tx)/100
}
// console.log(totals(tax(items)));


// deliverTo(TN, country)

let deliverTo=(state,country)=>(value)=>{
    return `Your Item will be diverd to ${state} ${country} and amount is ${Math.floor(value)}`
}

let pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

console.log(pipe(pluck("name"),totals,discount(10),tax(18),deliverTo('Maharashtra','India'))(items));

// console.log(pluck('name')(items))