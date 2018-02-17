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
    food3 = new Food("Chocolate", 50)
    food4 = new Food("Noodles", 5)

    task1 = new Task("Hoovering", 5, 3, food1)
    task2 = new Task("Dishes", 10, 10, food2)
    task3 = new Task("Washing Car", 15, 1, food3)
    task4 = new Task("Make Sushi", 20, 2, food4)

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
  assert.strictEqual(hero1.tasks.length, 2)
})

it('should be able to sort tasks by difficulty ASCENDING', function(){
hero1.addTask(task1)
hero1.addTask(task2)
hero1.addTask(task3)
hero1.addTask(task4)
hero1.sortTasksAscending('difficulty')
assert.strictEqual(hero1.tasks[0], task1)
assert.strictEqual(hero1.tasks[3], task4)
})

it('should be able to sort tasks by urgency ASCENDING', function(){
hero1.addTask(task1)
hero1.addTask(task2)
hero1.addTask(task3)
hero1.addTask(task4)
hero1.sortTasksAscending('urgency')
assert.strictEqual(hero1.tasks[0], task3)
assert.strictEqual(hero1.tasks[3], task2)
})

it('should be able to sort tasks by reward ASCENDING', function(){
hero1.addTask(task1)
hero1.addTask(task2)
hero1.addTask(task3)
hero1.addTask(task4)
hero1.sortTasksAscending('reward')
assert.strictEqual(hero1.tasks[0], task4)
assert.strictEqual(hero1.tasks[3], task3)
})

it('should be able to sort tasks by difficulty DESCENDING', function(){
hero1.addTask(task1)
hero1.addTask(task2)
hero1.addTask(task3)
hero1.addTask(task4)
hero1.sortTasksDescending('difficulty')
assert.strictEqual(hero1.tasks[0], task4)
assert.strictEqual(hero1.tasks[3], task1)
})

it('should be able to sort tasks by urgency DESCENDING', function(){
hero1.addTask(task1)
hero1.addTask(task2)
hero1.addTask(task3)
hero1.addTask(task4)
hero1.sortTasksDescending('urgency')
assert.strictEqual(hero1.tasks[0], task2)
assert.strictEqual(hero1.tasks[3], task3)
})

it('should be able to sort tasks by reward DESCENDING', function(){
hero1.addTask(task1)
hero1.addTask(task2)
hero1.addTask(task3)
hero1.addTask(task4)
hero1.sortTasksDescending('reward')
assert.strictEqual(hero1.tasks[0], task3)
assert.strictEqual(hero1.tasks[3], task4)
})


});
