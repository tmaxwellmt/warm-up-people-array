
var goldCustomers = ["Eric Sal", "Sarah Sizzle", "Steve Supl"];
var silverCustomers = ["Paul Rudd", "Sally Struthers", "Susan Sarandon"];
var platinumCustomers = ["Woug Dalter", "Myler Taxwell", "Sienna Scheid", "Tenn Jurner",
                          "Mody Celton", "Datie Kahlin", "Cean Sorbett"];

function Customer(first, last, level) {
  this.first = first;
  this.last = last;
  this.level = level;
}
var newCustomerList = [];

function loopCustomers(arr) {
  for (var i = 0; i < arr.length; i++) {
    var newCustomer = arr[i].split(' ');
      newCustomerList.push(new Customer(newCustomer[0], newCustomer[1], 'Gold'))
  };
  return newCustomerList;
}
console.log(loopCustomers(goldCustomers));

var customer1 = new Customer("Tyler", "Maxwell", "Gold");
