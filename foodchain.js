const eatsPlants = false;
const eatsAnimals = true;
let category;

category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined")

console.log(category);