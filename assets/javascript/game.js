window.onload = function () {
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var randWord, wordChoosen, hint, attempts, letterGuess, letterUsed=[], counter, userChoice;
	var showAttempts=document.getElementById("attempts");
	var showHint=document.getElementById("hint");
	var showGuessLetters=document.getElementById("letterGuess");
	var showClue = document.getElementById("clue");
	
	result = function () {
    	wordHolder = document.getElementById('showWord');
    	correct = document.createElement('ul');

    	for (var i = 0; i < wordChoosen.length; i++) {
    		correct.setAttribute('id', 'my-word');
      		letterGuess = document.createElement('li');
        	letterGuess.innerHTML = "_";

      		letterUsed.push(letterGuess);
      		wordHolder.appendChild(correct);
      		correct.appendChild(letterGuess);
    	}
	}
	
	comments = function () {
    showAttempts.innerHTML = "You have " + attempts + " attempts left";
    if (attempts < 1) {
      showAttempts.innerHTML = "Game Over";
    }
    for (var i = 0; i < letterUsed.length; i++) {
      if (counter=== letterUsed.length) {
        showAttempts.innerHTML = "You Win!";
      }
    }
		}	
	

	check = function () {
		document.onkeyup=function (event){
      	var guess = String.fromCharCode(event.keyCode).toLowerCase();
      	event.onkeyup=null;
      	for (var i = 0; i < wordChoosen.length; i++) {
        if (wordChoosen[i] === guess) {
          letterUsed[i].innerHTML = guess;
          counter += 1;
        } 
      }
      	var j = (wordChoosen.indexOf(guess));
      	if (j === -1) {
        attempts -= 1;
        comments();
      	} else {
        	comments();
      	}
	}
	}

	start=function(){
	//alert("You just begin playing");
	randWord=["bulbasaur", "squirtle", "charmander", "pikachu"];
	wordChoosen=randWord[Math.floor(Math.random()*randWord.length)];
	wordChoosen=wordChoosen.replace(/\s/g, "-");
	console.log(wordChoosen);
	check();
	letterUsed=[];
	attempts=10;
	counter=0;
	result();
	comments();
		}

	hint.onclick=function(){

		hints=["../images/bulbasaur.png", "../images/squirtle.png", "../images/charmander.png", "../images/pikachu.png"];
		var hintIndex= randWord.indexOf(wordChoosen);
		showClue.innerHTML=hints[hintIndex];
	}

	reset=function(){
		correct.parentNode.removeChild(correct);
    	letters.parentNode.removeChild(letters);
    	showClue.innerHTML = "";
		start();
	}
}