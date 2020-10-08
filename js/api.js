var button = document.querySelector('#player'); //pega o botão responsável pela gravação
var estado = false;

window.addEventListener('DOMContentLoaded', function(){ //inicia a função somente quando a página é carregada

	if(window.SpeechRecognition || window.webkitSpeechRecognition){ //verifica se navegador tem suporte a API
		var speech_api = window.SpeechRecognition || window.webkitSpeechRecognition; //escolhe uma das duas API
		var recebe_audio = new speech_api(); //novo objeto

		document.addEventListener('keydown', function(e){
			if(e.which == 13){
    				if(estado){
						recebe_audio.stop();
					return;
					}
					recebe_audio.start();
					}
		}, false);
		recebe_audio.continuous = true; //gravação contínua
		recebe_audio.interimResults = true; //resultado da gravação pode ou não ser alterado
		recebe_audio.lang = 'en'; //idioma da gravação

		recebe_audio.onstart = function(){
			transcription = '';
			num_trans = 0;
			num_origi = 0;
			array_origi = [];
			array_trans = [];
			acertos = [];
			erros = [];
			h.innerText = "";
			j.innerText = "";
			x = 0;
			estado = true;
			porcentagem.innerHTML = ("0%");
			button.innerHTML = 'Stop';
			efeito(0);
		};
		recebe_audio.onend = function(){
			estado = false;
			button.innerHTML = 'Star Again';
			nota()
		};
		recebe_audio.onresult = function(event){
			var interim_transcript = '';
			for(var i = event.resultIndex; i < event.results.length; i++){
				if(event.results[i].isFinal){
					transcription += event.results[i][0].transcript;
				}else{
					interim_transcript += event.results[i][0].transcript;
				}
				var resultado = transcription || interim_transcript;
			}
			//transcription = event.results[0][0].transcript;
			//console.log(resultado);
		};
		button.addEventListener('click', function(e){
			if(estado){
				recebe_audio.stop();
				return;
			}
			recebe_audio.start();
		}, false);

	}else{
		console.log('Navegador sem suporte a Web Speech API');
	}

}, false);