const main = function counter(i) {
	console.log(i);
	if (i < 10) {
		return counter(i + 1);
	}
};
main(0);
