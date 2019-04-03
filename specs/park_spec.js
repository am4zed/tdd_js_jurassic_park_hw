const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;

  beforeEach(function() {
    park = new Park("Jurassic Park", 10);
    dinosaur1 = new Dinosaur("Velociraptor", "carnivore", 500);
    dinosaur2 = new Dinosaur("Diplodocus", "herbivore", 400);
    dinosaur3 = new Dinosaur("Diplodocus", "herbivore", 300);
  });


  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.add_dinosaur(dinosaur1);
    park.add_dinosaur(dinosaur2);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.add_dinosaur(dinosaur1);
    park.add_dinosaur(dinosaur2);
    park.remove_dinosaur(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.add_dinosaur(dinosaur1);
    park.add_dinosaur(dinosaur2);
    const actual = park.find_dinosaur_most_visitors();
    assert.strictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.add_dinosaur(dinosaur1);
    park.add_dinosaur(dinosaur2);
    park.add_dinosaur(dinosaur3);
    const actual = park.find_species("Diplodocus");
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur3]);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.add_dinosaur(dinosaur1);
    park.add_dinosaur(dinosaur2);
    park.add_dinosaur(dinosaur3);
    park.remove_species("Diplodocus");
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to calculate total number of visitors per day', function(){
    park.add_dinosaur(dinosaur1);
    park.add_dinosaur(dinosaur2);
    park.add_dinosaur(dinosaur3);
    const actual = park.total_visitors_per_day();
    assert.strictEqual(actual, 1200);
  })

});
