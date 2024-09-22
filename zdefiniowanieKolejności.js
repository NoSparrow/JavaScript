const one = () => console.log("jeden");
const two = () => console.log("dwa");
const three = () => {
	console.log("trzy");
	one();
	two();
};
const four = () => {
	console.log("cztery");
	setTimeout(one, 0);
	three();
};
four();
