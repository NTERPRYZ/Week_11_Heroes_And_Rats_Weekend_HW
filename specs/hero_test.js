const assert = require('assert');
const Hero = require('../hero.js');
const Task = require('../task.js');
const Food = require('../food.js');

describe('hero test', function(){
  let hero1;
  let hero2;

  let food1;
  let food2;

  let task1;
  let task2;

  beforeEach(function(){
    hero1 = new Hero("Robert", "Pizza")
    hero2 = new Hero("Laura", "Pizza")

    food1 = new Food("Burger", 10)
    food2 = new Food("Pizza", 20)

    task1 = new Task("Hoovering", 5, 3, food1)
    task2 = new Task("Dishes", 10, 10, food1)

  })

it('should have a name and favourite food', function(){
  assert.strictEqual(hero1.name, "Robert");
  assert.strictEqual(hero1.faveFood, "Pizza");
  // console.log('food2 name:', food2.name);
  // console.log('hero favefood:', hero.faveFood);
})

it('should start with 100 health and no tasks', function(){
  assert.strictEqual(hero1.health, 100);
  assert.strictEqual(hero1.tasks.length, 0);
})

it('should be able to talk', function(){
  assert.strictEqual(hero1.talk(), "I am Robert")
})

it('should be able to eat', function(){
  hero1.eat(food1);
  assert.strictEqual(hero1.health, 110);
  hero1.eat(food2);
  assert.strictEqual(hero1.health, 140);
  hero2.eat(food2)
  assert.strictEqual(hero2.health, 130);
})

it('should be able to eat fave food', function(){
  assert.strictEqual(hero1.isFaveFood(food2), true)
})

it('should be able to add tasks', function(){
  hero1.addTask(task1)
  hero1.addTask(task2)
  console.log("task array", hero1.tasks);
  assert.strictEqual(hero1.tasks.length, 2)
})

});
