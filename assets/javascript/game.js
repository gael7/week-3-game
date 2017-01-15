window.onload = function() {
    var randWord,
        wordChoosen,
        hint,
        attempts,
        letterGuess,
        letterUsed = [],
        counter,
        wrongLetter = [],
        usedLetters = [];
    var showAttempts = document.getElementById("attempts");
    var showHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");
    var showWrong = document.getElementById('usedKeys');

    //Shows the correct letters on the right position
    result = function() {
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
    };

    //Shows the comments of the game
    comments = function() {
        showAttempts.innerHTML = "You have " + attempts + " attempts left";
        if (attempts < 1) {
            showAttempts.innerHTML = "Game Over";
        }
        for (var i = 0; i < letterUsed.length; i++) {
            if (counter === letterUsed.length) {
                showAttempts.innerHTML = "You Win!";
                youWin();
            }
        }
    };

    //When you are a winner it will show the correct image for the word
    youWin = function() {
        winnerPic = ["bulbasaur.png", "squirtle.png", "charmander.png", "pikachu.png"];
        var winnerIndex = randWord.indexOf(wordChoosen);
        showClue.innerHTML = "<img src='assets/images/" + winnerPic[winnerIndex] + "' class='pokemonimg'>";
    };

    //Verifies that the letter press is not repeat
    noRepeat = function(letter) {
        var used;
        for (var a = 0; a < usedLetters.length + 1; a++) {
            if (usedLetters[a] === letter) {
                used = 0;
                break;
            } else {
                used = 1;
            }
        }
        return used;
    };

    //Get the guess letter and compare it to the letters on the choosen word
    //if the letter was not already entry it compares it
    //if the guess is correct, the letter is push to usedLetters array, and changes the _ for the correct letter
    //if the guess is not correct it reduces the attempts left, and add the letter to wrongLetter array
    check = function() {
        document.onkeyup = function(event) {
            var guess = String.fromCharCode(event.keyCode).toLowerCase();
            var repeat = noRepeat(guess);
            if (repeat === 1) {
                for (var i = 0; i < wordChoosen.length; i++) {
                    if (wordChoosen[i] === guess) {
                        usedLetters.push(guess);
                        letterUsed[i].innerHTML = guess;
                        counter += 1;
                    }
                }
                var j = (wordChoosen.indexOf(guess));
                if (j === -1) {
                    attempts -= 1;
                    usedLetters.push(guess);
                    wrongLetter.push(" " + guess);
                    showWrong.innerHTML = wrongLetter;
                    comments();
                } else {
                    comments();
                }
            }
        };
    };

    //Start playing
    start = function() {
        randWord = ["bulbasaur", "squirtle", "charmander", "pikachu"];
        wordChoosen = randWord[Math.floor(Math.random() * randWord.length)];
        wordChoosen = wordChoosen.replace(/\s/g, "-");
        check();
        letterUsed = [];
        wrongLetter = [];
        attempts = 7;
        counter = 0;
        result();
        comments();
    };

    //Shows hint after click on button hint
    showHint.onclick = function() {
        hints = ["bulbasaur1.png", "squirtle1.png", "charmander1.png", "pikachu1.png"];
        var hintIndex = randWord.indexOf(wordChoosen);
        showClue.innerHTML = "<img src='assets/images/" + hints[hintIndex] + "' class='pokemonimg'>";
    };

    //Reset before continue playing again
    reset.onclick = function() {
        correct.parentNode.removeChild(correct);
        showClue.innerHTML = "";
        showWrong.innerHTML = "";
        usedLetters = [];
        start();
    };
};
