
function FruitMaker(name, color){
  this.name = name;
  this.color = color;
}
FruitBasket.prototype.aboutMe = function() {
  return "I am a" + this.name + "and I am colored" + this.color;
}
module.exports = fruitMaker;
