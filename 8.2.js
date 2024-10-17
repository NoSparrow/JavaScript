const arr = [
	"Laura",
	"Michał",
	"Ludwik",
	"Katarzyna",
	"Joanna",
	"Laura",
	"Michał",
	"Laura",
	"Michał",
];
const arr2 = arr.filter((value, index, array) => {
	console.log(value, index, array.indexOf(value));
	return array.indexOf(value) === index;
});
console.log(arr2);
