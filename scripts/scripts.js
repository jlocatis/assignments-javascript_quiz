window.addEventListener("load", function() {
	questions = [["When the Millenium Falcon arrives on the Death Star, Han and Luke steal Stormtrooper uniforms. Whose does Luke's belong to?", "tk-421"],
		["During the attack on the first Death Star, what is Luke's call sign?", "red five"],
		["Lando's Cloud City hangs in the atmosphere above which world?", "bespin"],
		["What is Jar-Jar Binks' home planet?", "naboo"]];

	counter = 0

	restart();

	document.getElementsByClassName("quiz")[0].addEventListener("click", runQuiz);
	
	function restart() {
		document.getElementsByClassName("win")[0].style.display = "none";
		document.getElementsByClassName("right")[0].style.display = "none";
		document.getElementsByClassName("score")[0].textContent = "Current Score: 0 / 4";
		document.getElementsByClassName("attempts")[0].textContent = "Number of Tries: 0";
		printQuestion();
	}

	function printQuestion() {
		document.getElementsByClassName("question")[0].textContent = questions[counter][0];
	}
	
	function runQuiz() {
		current_answer = document.getElementsByClassName("answer")[0].value.toLowerCase();
		checkAnswer(current_answer);
	}

	function checkAnswer(current_answer) {
		if (current_answer == questions[counter][1]) {
			if (counter < 3) {
				document.getElementsByClassName("wrong")[0].style.display = "none";
				document.getElementsByClassName("right")[0].style.display = "block";
				document.getElementsByClassName("answer")[0].value = "";
				updateScore();
				updateAttempts();
				counter++;
				printQuestion();
			} else {
				document.getElementsByClassName("wrong")[0].style.display = "none";
				document.getElementsByClassName("right")[0].style.display = "none";
				updateScore();
				updateAttempts();
				counter = 0;
				document.getElementsByClassName("win")[0].style.display = "block";
				document.getElementsByClassName("start_over")[0].addEventListener("click", restart)
			}
		} else {
			document.getElementsByClassName("right")[0].style.display = "none";
			document.getElementsByClassName("wrong")[0].style.display = "block";
			updateAttempts();
		}
	}

	function updateScore() {
		score = document.getElementsByClassName("score")[0].textContent
		score = score.split(" ");
		current_score = parseInt(score[2]);
		current_score = current_score + 1;
		current_score = current_score.toString();
		score[2] = current_score
		score = score.join(' ');
		document.getElementsByClassName("score")[0].textContent = score
	}

	function updateAttempts() {
		attempts = document.getElementsByClassName("attempts")[0].textContent
		attempts = attempts.split(" ");
		current_score = parseInt(attempts[3]);
		current_score = current_score + 1;
		current_score = current_score.toString();
		attempts[3] = current_score
		attempts = attempts.join(' ');
		document.getElementsByClassName("attempts")[0].textContent = attempts
	}
});