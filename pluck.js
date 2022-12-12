let cart = [
  {
    name: "shoe",
    price: 2000,
  },
  {
    name: "Shirt",
    price: 1200,
  },
  {
    name: "pant",
    price: 14000,
  },
  {
    name: "bag",
    price: 2500,
  },
];

// pluck("price")
let pluck = (value) => (item) => {
  item.map((el) => console.log(el[value]));
  return item;
};
// console.log(pluck("name"));

// Total
let totals = (item) => {
  let amt = item.reduce((ac, cVal) => {
    return ac + cVal.price;
  }, 0);
  console.log("total is", amt);
  return amt;
};

//   console.log(totals());

// Discount(10)
let discount = (perc) => (total) => {
  var dis = (total * (100 - perc)) / 100;
  console.log("10% discount applied", dis);
  return dis;
};

// console.log(discount(18));

// tax(18.5)
let tax = (tx) => (amount) => {
  let taxAmt = (amount * (100 + tx)) / 100;
  console.log("tax added", taxAmt);
  return taxAmt;
};

// deliverTo(TN, country)

let deliverTo = (state, country) => (value) => {
  return `Your Item will be diverd to ${state} ${country} and amount is ${Math.floor(
    value
  )}`;
};

let pipe =(...fns) =>(x) =>fns.reduce((v, f) => f(v), x);

console.log( pipe( pluck("price"),totals,discount(10),tax(18),deliverTo("Maharashtra", "India"))(cart));
