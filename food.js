const Food = function(name, replenish){
  this.name = name;
  this.replenish = replenish;
  this.poison = false;
}

Food.prototype.moreReplenish = function(){
  return this.replenish * 1.5
};

module.exports = Food;
