var romanos = [
	"",
	"i",
	"ii",
	"iii",
	"iv",
	"v"
];

function phrasal(key){
	window.location.href = `../post/p-${romanos[key]}`;
}
function structure(key){
	window.location.href = `../post/s-${romanos[key]}`;
}
function vocabulary(key){
	window.location.href = `../post/v-${romanos[key]}`;
}