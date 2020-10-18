var labelPhrasal = document.getElementById("frase");
var labelFrase = document.getElementById("traducao");
var audioNativo = document.getElementById("som");
var labelPosition = document.getElementById("position");
var cont = 0;
var x = 0;
labelPhrasal.innerHTML = phrasal[cont];
labelFrase.innerHTML = frase[cont];
audioNativo.src = audio[cont];
labelPosition.innerHTML = `Position: ${cont + 1} of ${phrasal.length}`;
function next(){
	if(cont < (phrasal.length - 1)){
		cont += 1;
		labelPhrasal.innerHTML = phrasal[cont];
		labelFrase.innerHTML = frase[cont];
		audioNativo.src = audio[cont];
		porcentagem.innerHTML = ("0%");
		labelPosition.innerHTML = `Position: ${cont + 1} of ${phrasal.length}`;
		h.innerText = "";
		j.innerText = "";
		efeito(0);
	}
}
function retornar(){
	if(cont > 0){
		cont -= 1;
		labelPhrasal.innerHTML = phrasal[cont];
		labelFrase.innerHTML = frase[cont];
		audioNativo.src = audio[cont];
		labelPosition.innerHTML = `Position: ${cont + 1} of ${phrasal.length}`;
		h.innerText = "";
		j.innerText = "";
		efeito(0);
	}
}

function playAudio(key){
	var som = document.getElementById("som");
	som.play();
}
function repeatAudio(key){
	if(true){
		var som = document.getElementById("som");
		som.play();
		var timer = setInterval(function(){ 
			var som = document.getElementById("som");
			som.play();
		}, 2500);
	}
}

function esconder(){
	if(x == 0){
		var escondido = document.getElementById("traducao");
		var hidden = document.getElementById("hidden");
		escondido.style.display = "none";
		hidden.innerHTML = "Show Translation";
		x = 1;
	}else{
		var escondido = document.getElementById("traducao");
		var hidden = document.getElementById("hidden");
		hidden.innerHTML = "Hide Translation";
		escondido.style.display = "block";
		x = 0;
	}
	
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
 function home(){
 	window.location.href = "../../home"
 }