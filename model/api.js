window.addEventListener('DOMContentLoaded', function(){ //inicia a função somente quando a página é carregada

	var button = document.querySelector('#player'); //pega o botão responsável pela gravação

	//var transcription = '';
	var estado = false;

	if(window.SpeechRecognition || window.webkitSpeechRecognition){ //verifica se navegador tem suporte a API
		var speech_api = window.SpeechRecognition || window.webkitSpeechRecognition; //escolhe uma das duas API
		var recebe_audio = new speech_api(); //novo objeto

		recebe_audio.continuous = true; //gravação contínua
		recebe_audio.interimResults = true; //resultado da gravação pode ou não ser alterado
		recebe_audio.lang = 'en'; //idioma da gravação

		recebe_audio.onstart = function(){
			estado = true;
			button.innerHTML = 'Stop';
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
			console.log(resultado);
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