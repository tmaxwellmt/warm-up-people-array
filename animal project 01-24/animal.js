function Animal(name, genius, species, commonName, diet, city, zooKeeperName){
  this.diet = diet;
  this.genius = genius;
  this.species = species;
  this.commonName = commonName;
  this.name = name;
  this.city = city;
  this.zooKeeperName = zooKeeperName;
}

Animal.prototype.zooName = function () {
  return "I live at the " + this.city + " zoo."
}

module.exports = Animal;
