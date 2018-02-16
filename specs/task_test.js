const assert = require('assert');
const Task = require('../task.js');
const Food = require('../food.js')

describe('task test', function (){
  let task
})

beforeEach(function(){
  food1 = new Food("Burger", 10)
  food2 = new Food("Pizza", 20)
  task1 = new Task("Hoovering", 5, 3, food1)
  task2 = new Task("Dishes", 10, 10, food1)
})

it("Should have a name", function(){
  assert.strictEqual(task1.name, "Hoovering")
})

it("Should have a difficulty level", function(){
  assert.strictEqual(task1.difficulty, 5)
})

it("Should have a urgency value", function(){
  assert.strictEqual(task2.urgency, 10)
})

it("Should be able to be completed", function(){
  task1.complete()
  assert.strictEqual(task1.completed, true)
})
