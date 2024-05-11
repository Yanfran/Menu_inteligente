<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		/*img{
			display: block;
 			margin: 0px auto;;
			background-size: cover;
		}*/
	</style>
</head>
<body>
	<!-- <img src="mantenimiento.jpeg" alt=""> -->
	<div class="botones">
		<button id="btnStartRecord">Empezar a Grabar</button>
		<button id="btnStopRecord">Terminar Grabación</button>
		<button id="playText">Reproducir</button>
	</div>

	<textarea id="texto" cols="30" rows="10"></textarea>

	



<script>
	const btnStartRecord = document.getElementById('btnStartRecord');
	const btnStopRecord = document.getElementById('btnStopRecord');
	const btnPlayText = document.getElementById('playText');
	const text = document.getElementById('texto');

	// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
	// let recognition = new SpeechRecognition();

	let recognition = new webkitSpeechRecognition();

	recognition.lang = 'es-ES' ;
	recognition.continuous = true;
	recognition.interimResults = false;


	recognition.onresult = (event) => {
		const results = event.results;
		// console.log(results);
		const frase = results[results.length-1][0].transcript;
		texto.value += frase;
	}

	recognition.onend = (event) => {
		console.log('El microfono deja de escuchar');
	}

	recognition.onerror = (event) => {
		console.log(event.error);
	}


	btnStartRecord.addEventListener('click', () => {
		recognition.start();
	})

	btnStopRecord.addEventListener('click', () => {
		recognition.abort();
	})

	

	btnPlayText.addEventListener('click', () => {
		leerTexto(texto.value);
	})

	function leerTexto(texto){
		const speech = new SpeechSynthesisUtterance();
		speech.text = texto;
		speech.volume = 1;
		speech.rate = 1;
		speech.pitch = 1;

		window.speechSynthesis.speak(speech);
	}



	
</script>

</body>
</html>