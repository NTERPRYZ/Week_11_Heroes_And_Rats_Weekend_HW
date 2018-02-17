const Hero  = function(name, faveFood){
  this.name     = name;
  this.faveFood = faveFood;
  this.health   = 100;
  this.tasks    = [];
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

Hero.prototype.addTask = function(task){
  this.tasks.push(task)
};

Hero.prototype.sortFunctionAscending = function (sortByType) {
  return function(first, second){
    switch (sortByType) {
      case 'difficulty' :
        return first.difficulty - second.difficulty;
        break;
      case 'urgency' :
        return first.urgency - second.urgency;
        break;
      case 'reward' :
        return first.reward.replenish - second.reward.replenish;
        break;
    }
  }
};

Hero.prototype.sortFunctionDescending = function (sortByType) {
  return function(first, second){
    switch (sortByType) {
      case 'difficulty' :
        return second.difficulty - first.difficulty;
        break;
      case 'urgency' :
        return second.urgency - first.urgency;
        break;
      case 'reward' :
        return second.reward.replenish - first.reward.replenish;
        break;
    }
  }
};


Hero.prototype.sortTasksAscending = function(type){
  return this.tasks.sort(this.sortFunctionAscending(type))
}

Hero.prototype.sortTasksDescending = function(type){
  return this.tasks.sort(this.sortFunctionDescending(type))
}



module.exports = Hero;
