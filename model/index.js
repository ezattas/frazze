// Declaração de variáveis e matrizes
var transcription = '';
var original = 'the only thing I can do is keep quiet and sit this one out';
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
	array_origi = original.slice(1, -1);
	array_origi = original.split(' ');
	array_trans = transcription.split(' ');
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
	console.log(acertos.length)
	console.log(erros.length)
	porcentagem.innerHTML = (Math.round(x) + "%"); //exibe no console a porcentagem de acerto
	for(var i = 0; i <= acertos.length; i++){
		
	}
}
