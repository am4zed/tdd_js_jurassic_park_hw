const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
};

Park.prototype.add_dinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};

Park.prototype.remove_dinosaur = function(dinosaur){
  index = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(index, 1);
};

Park.prototype.find_dinosaur_most_visitors = function(){
  this.dinosaurs.sort();
  return this.dinosaurs.shift();
};

Park.prototype.find_species = function(species){
  let diplodocus_dinos = [];
  for (const dinosaur of this.dinosaurs){
  if (dinosaur.species === species)
    {diplodocus_dinos.push(dinosaur)};
  };
  return diplodocus_dinos;
};

Park.prototype.remove_species = function(species){
  for (const dinosaur of this.dinosaurs){
    if (dinosaur.species === species)
      {index = this.dinosaurs.indexOf(dinosaur);
        this.dinosaurs.splice(index, 1);
      };
  };
};

Park.prototype.total_visitors_per_day = function(){
  let total = 0;
  for (const dinosaur of this.dinosaurs) {
    total += dinosaur.guestsAttractedPerDay;
  }
  return total;
};




module.exports = Park;
