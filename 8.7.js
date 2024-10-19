let future = new Date(2025, 5, 15);
console.log(future);
const months = [
	"styczeń",
	"luty",
	"marzec",
	"kwiecień",
	"maj",
	"czerwiec",
	"lipiec",
	"sierpień",
	"wrzesień",
	"październik",
	"listopad",
	"grudzień",
];
let day = future.getDate();
let month = future.getMonth();
let year = future.getFullYear();
let myDate = `${day} ${months[month - 1]} ${year}`;
console.log(myDate);
