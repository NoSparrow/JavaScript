let start = 10;

function loop1(val) {
	console.log(val);
	if (val < 1) {
		val--;
		return;
	}
	return loop1(val - 1);
}
loop1(start);
function loop2(val) {
	console.log(val);
	if (val > 0) {
		val--;
		return loop2(val);
	}
	return;
}
loop2(start);
