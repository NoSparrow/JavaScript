const adj = ["super", "cudowny", "zły", "wściekły", "troskliwy"];

function myFun() {
	const question = prompt("Jak masz na imie?");
	const nameAdj = Math.floor(Math.random() * adj.length);
	console.log(adj[nameAdj] + " " + question);
}
myFun;
