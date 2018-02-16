const assert = require('assert');
const Food = require('../hero.js');

describe('food test', function(){
  let food
})

beforeEach(function(){
  food1 = new Food("Burger", 10)
  food2 = new Food("Pizza", 20)
})

it("Should have a name and replenish value", function(){
  assert.strictEqual(food1.name, "Burger")
  assert.strictEqual(food2.replenish, 20)
})
