window.onload = function () {
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var randWord, wordChoosen, hint, attempts, letterGuess, letterUsed=[], counter, wrongLetter=[];
	var showAttempts=document.getElementById("attempts");
	var showHint=document.getElementById("hint");
	var showClue=document.getElementById("clue");
	var showWrong = document.getElementById('usedKeys');

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
        youWin();
      }
    }
		}

	youWin=function(){
		winnerPic=["bulbasaur.png", "squirtle.png", "charmander.png", "pikachu.png"];
		var winnerIndex= randWord.indexOf(wordChoosen);
		showClue.innerHTML="<img src='assets/images/" + winnerPic[winnerIndex] + "' class='pokemonimg'>";
	}

	check = function () {
		document.onkeyup=function (event){
      	var guess = String.fromCharCode(event.keyCode).toLowerCase();
      	for (var i = 0; i < wordChoosen.length; i++) {
        	if (wordChoosen[i] === guess) {
          		letterUsed[i].innerHTML = guess;
          		counter += 1;
        		}
        	}
      		var j = (wordChoosen.indexOf(guess));
      		if (j === -1) {
        		attempts -=1;
        		wrongLetter.push(" " + guess);
        		console.log(wrongLetter);
        		showWrong.innerHTML=wrongLetter;
        		comments();
      			} else {
        		comments();
      		}
		}
	}

	//Start playing
	start=function(){
	randWord=["bulbasaur", "squirtle", "charmander", "pikachu"];
	wordChoosen=randWord[Math.floor(Math.random()*randWord.length)];
	wordChoosen=wordChoosen.replace(/\s/g, "-");
	console.log(wordChoosen);
	check();
	letterUsed=[];
	wrongLetter=[];
	attempts=7;
	counter=0;
	result();
	comments();
		}

	//shows hint after click on button hint
	showHint.onclick=function(){
		hints=["bulbasaur1.png", "squirtle1.png", "charmander1.png", "pikachu1.png"];
		var hintIndex= randWord.indexOf(wordChoosen);
		showClue.innerHTML="<img src='assets/images/" + hints[hintIndex] + "' class='pokemonimg'>";
	}

	//reset before continue playing again
	reset.onclick=function(){
		correct.parentNode.removeChild(correct);
    	showClue.innerHTML = "";
    	showWrong.innerHTML="";
		start();
	}
}