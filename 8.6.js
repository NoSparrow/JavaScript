console.log(Math.PI);
console.log(Math.ceil(5.7));
console.log(Math.floor(5.7));
console.log(Math.round(5.7));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.floor(Math.random() * 100));
function ranNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let x = 0; x < 100; x++) {
	console.log(ranNum(1, 100));
}