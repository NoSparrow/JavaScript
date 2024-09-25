class Animal {
	constructor(species, sounds) {
		this.species = species;
		this.sounds = sounds;
	}
	speak() {
		console.log(this.species + " " + this.sounds);
	}
}
Animal.prototype.eat = function () {
	return this.species + " je";
};
let cat = new Animal("kot", "miauczy");
let dog = new Animal("pies", "szczeka");
cat.speak();
console.log(dog.eat());
console.log(dog);
