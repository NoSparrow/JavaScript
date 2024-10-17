const val = "kaŻde słowo rozPocznie się wielką liTerą";
function wordCaps(str) {
	str = str.toLowerCase();
	const tempArr = [];
	let words = str.split(" ");
	words.forEach((word) => {
		let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
		tempArr.push(temp);
	});
	return tempArr.join(" ");
}
console.log(wordCaps(val));
