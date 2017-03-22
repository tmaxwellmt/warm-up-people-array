var fruitMaker = requiere('./fruitMaker/fruitMaker');
var fruit  = {};
var fruit2 = {};

var fruit = {
  name: "Red Delicous",
  color: "Red",
  aboutMe: function(){
    return "I am a" + this.name + "and I am colored" + this.color;
  };
};

var fruit2 = {
  name: "Slippery Banana",
  color: "Yellow",
  aboutMe: function(){
    return "I am a" + this.name + "and I am colored" + this.color;;
  };
};
console.log(fruitMaker);
