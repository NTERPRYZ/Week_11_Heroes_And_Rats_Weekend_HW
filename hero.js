const Hero  = function(name, faveFood){
  this.name = name;
  this.faveFood = faveFood;
  this.health = 100;
  this.tasks = [];
}

Hero.prototype.talk = function () {
  return `I am ${this.name}`;
};

Hero.prototype.isFaveFood = function (food) {
  return food.name === this.faveFood ? true : false;
};

Hero.prototype.eat = function (food) {
  if(this.isFaveFood(food)){
    this.health += food.moreReplenish()
  }else{
    this.health += food.replenish
  }
};

module.exports = Hero;
