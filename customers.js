
//looping through arrays to show customer tier.

var goldCustomers = ["Eric Sal", "Sarah Sizzle", "Steve Supl"];
var silverCustomers = ["Paul Rudd", "Sally Struthers", "Susan Sarandon"];
var platinumCustomers = ["Woug Dalter", "Myler Taxwell", "Sienna Scheid", "Tenn Jurner",
                          "Mody Celton", "Datie Kahlin", "Cean Sorbett"];

function Customer(first, last, level) { //cunstrutor function
  this.first = first;
  this.last = last;
  this.level = level;
}
var newCustomerList = []; //passing customers into this new array

//looping through customers
function loopCustomers(arr) {
  for (var i = 0; i < arr.length; i++) {
    var newCustomer = arr[i].split(' ');//.split seperates first and last in one name string in an array
      newCustomerList.push(new Customer(newCustomer[0], newCustomer[1], 'Gold'))
  };
  return newCustomerList;
}
console.log(loopCustomers(goldCustomers));

var customer1 = new Customer("Tyler", "Maxwell", "Gold");
