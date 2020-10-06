// Declaração de variáveis e matrizes
var transcription = '';
var original;
var num_trans;
var num_origi;
var array_origi = [];
var array_trans = [];
var acertos = [];
var erros = [];
var x = 0;
var y;
var porcentagem = document.querySelector('#porcentagem'); //pega o console da porcentagem de acertos
// Declaração de funções:

function nota(){
	original = phrasal[cont];
	array_origi = original.replace('.', '');
	array_origi = array_origi.replace(',', '');
	array_origi = array_origi.replace("'", '');
	array_origi = array_origi.replace('!', '');
	array_origi = array_origi.replace('?', '');
	array_trans = transcription.replace("'", '');
	array_trans = array_trans.replace("'", '');
	array_origi = array_origi.toLowerCase();
	array_trans = array_trans.toLowerCase();
	console.log(array_origi);
	console.log(array_trans);
	array_origi = array_origi.split(' ');
	array_trans = array_trans.split(' ');
	num_origi = array_origi.length;
	num_trans = array_trans.length;
	for(var i = 0;  i< array_origi.length; i++) {
    	if(array_trans.indexOf(array_origi[i]) > -1) {
       		acertos.push(array_origi[i]);
    	}else{
    		erros.push(array_origi[i]);
    	}
	}
	x = ((acertos.length / num_origi) * 100);
	porcentagem.innerHTML = (Math.round(x) + "%"); //exibe no console a porcentagem de acerto
	efeito(x);
	for(var i = 0; i <= acertos.length; i++){
		
	}
}

function efeito(key){
	var escala = document.getElementById("escala");
	escala.style.background = `linear-gradient(to bottom, #102030 0%, #102030 ${100-key}%, #304050 0%, #304050 ${key}%)`;
}