document.addEventListener('keydown', function(e){
    if(e.which == 65){
    	playAudio();
    }else{
    	if(e.which == 37){
    		retornar();
    	}else{
    		if(e.which == 39){
    			next();
    		}
    	}
    }
}, false);
