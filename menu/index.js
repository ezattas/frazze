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

//desabilita a seleção de texto:
function disableselect(e){
		return false;
} 
document.onselectstart=new Function ("return false"); 
if (window.sidebar){
	document.onmousedown=disableselect;
	document.onclick=reEnable;
}

function menu(){
	window.location.href = "../../menu";
}
