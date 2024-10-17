let val = "Uwielbiam JavaScript";
val = val.toLowerCase();
let samogloski = ["a", "e", "i", "o", "u"];
samogloski.forEach((letter, index) => {
	console.log(letter);
	val = val.replaceAll(letter, index);
    console.log(val);
});
console.log(val);
