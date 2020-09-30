const elementos = document.querySelectorAll("[data-anima]");
const animacaoClass="animacao";
var primeiro = document.getElementById("container-primario");
var segundo = document.getElementById("container-secundario");
var terceiro = document.getElementById("container-terciario");

function start(){
	primeiro.style.opacity = "1";
	console.log(position);
}

function animaScroll(){
	const position = window.pageYOffset;
	if(position <= 50){
		primeiro.style.opacity = "1";
		segundo.style.opacity = "0";
		terceiro.style.opacity = "0";
	};
	if(position >= 260){
		primeiro.style.opacity = "0";
		segundo.style.opacity = "1";
		terceiro.style.opacity = "0";
	};
	if(position >= 800){
		primeiro.style.opacity = "0";
		segundo.style.opacity = "0";
		terceiro.style.opacity = "1";
	};
}
