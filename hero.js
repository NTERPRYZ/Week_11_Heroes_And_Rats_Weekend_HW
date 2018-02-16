const Hero  = function(name, faveFood){
  this.name = name;
  this.faveFood = faveFood;
  this.health = 100;
  this.tasks = [];
}

Hero.prototype.talk = function () {
  return `I am ${this.name}`;
};

Hero.prototype.isFavFood = function (food) {
  return food.name === this.favFood ? true : false;
};

module.exports = Hero;
