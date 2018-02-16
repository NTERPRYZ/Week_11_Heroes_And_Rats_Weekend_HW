const assert = require('assert');
const Task = require('../task.js');
const Food = require('../food.js')

describe("task test", function (){
  let task
})

beforeEach(function(){
  food1 = new Food("Burger", 10)
  task1 = new Task("Hoovering", 5, 3, food1)
})

it("Should be able have a name", function(){
  assert.strictEqual(task1.name, "Hoovering")
})

it("Should have a difficulty level", function(){
  assert.strictEqual(task1.difficulty, 5)
})
