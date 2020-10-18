function menus(){
	window.location.href = "../menu";
}
function ezattas(){
	window.location.href = "https://ezattas.com";
}
// desabilitar seleção de texto
function disableselect(e){
		return false;
} 
document.onselectstart=new Function ("return false"); 
if (window.sidebar){
	document.onmousedown=disableselect;
	document.onclick=reEnable;
}
function home(){
	window.location.href = "../../home"
}