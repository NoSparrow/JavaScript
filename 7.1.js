class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
}
let person1 = new Person("Maaike", "van Putten");
let person2 = new Person("Laurence", "Svekis");
console.log("witaj " + person1.firstname + " " + person1.lastname);
console.log("Witaj " + person2.firstname + " " + person2.lastname);
