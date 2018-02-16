const assert = require('assert');
const Hero = require('../hero.js');
const Task = require('../task.js');
const Food = require('../food.js');

describe('hero test', function(){
  let hero

  beforeEach(function(){
    hero = new Hero("Robert", "Pizza")
    // food1 = new Food()
  })

it('should have a name and favourite food', function(){
  assert.strictEqual(hero.name, "Robert");
  assert.strictEqual(hero.faveFood, "Pizza");
})

it('should start with 100 health and no tasks', function(){
  assert.strictEqual(hero.health, 100);
  assert.strictEqual(hero.tasks.length, 0);
})

it('should be able to talk', function(){
  assert.strictEqual(hero.talk(), "I am Robert")
})

// it('should be able to eat', function(){
//   hero.eat(food1);
//   assert.strictEqual(hero.health, 110);
// })

});
