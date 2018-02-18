


window.onload = function (event) {

    var crypto1 = {
        name: "ethereum",
        picture: "assets/images/ethereum.jpg",

    }
    var crypto2 = {
        name: "bitcoin",
        picture: "assets/images/bitcoin.jpg",

    }
    var crypto3 = {
        name: "litecoin",
        picture: "assets/images/litecoin.jpg",

    }

    var randomWord = [crypto1, crypto2, crypto3];

    function makeSlash(str) {
        len = str.length;
        console.log(len);
        return Array(len + 1).join(" __ ");
    }

    function remove(array, element) {
        const index = array.indexOf(element);

        if (index !== -1) {
            array.splice(index, 1);
        }
    }

    var randObj = randomWord[Math.floor(Math.random() * randomWord.length)];

    var word = randObj.name;


    document.getElementById("currentWord").textContent = makeSlash(word);


    var numofWins = parseInt(document.getElementById("numOfwins").textContent);

    console.log(numofWins);

    var numofguess = parseInt(document.getElementById("numOfguess").textContent);

    console.log(numofguess);

    var badGuesses = [];


    document.onkeyup = function (event1) {
        var keyPressed = event1.key;
        var rightGuesses = word.split("");
        var currwordSplit = document.getElementById("currentWord").textContent.split("  ");
        if (rightGuesses.indexOf(keyPressed) >= 0) {
            for (var i = 0; i < rightGuesses.length; i++) {
                if (rightGuesses[i] == keyPressed) {
                    currwordSplit[i] = rightGuesses[i];
                    document.getElementById("currentWord").textContent = currwordSplit.join("  ");

                    if (badGuesses.indexOf(keyPressed)==-1){
                        badGuesses.push(keyPressed);
                        document.getElementById("guessedLetters").textContent = badGuesses.join(",");
                        document.getElementById("numOfguess").textContent = parseInt(document.getElementById("numOfguess").textContent) - 1;
                    }
                    // remove(rightGuesses, rightGuesses[i]);
                    if (rightGuesses.join("  ") == currwordSplit.join("  ") ) {
                        alert("You won");
                        document.getElementById('bodyPart').innerHTML="Yes dude it was " + randObj.name;
                        document.getElementById('image1').src=randObj.picture;
                        badGuesses = [];
                        document.getElementById("guessedLetters").textContent = badGuesses.join(",");
                        document.getElementById("numOfguess").textContent = 15;
                        randObj = randomWord[Math.floor(Math.random() * randomWord.length)];
                        word = randObj.name;
                        document.getElementById("currentWord").textContent = makeSlash(word);
                        document.getElementById("numOfwins").textContent = parseInt(document.getElementById("numOfwins").textContent) + 1;
                        
                    }
                }
            }
        } else {
            if (badGuesses.indexOf(keyPressed) >= 0) {
                alert("you used this letter");
            } else {
                badGuesses.push(keyPressed);
                document.getElementById("guessedLetters").textContent = badGuesses.join(",");
                document.getElementById("numOfguess").textContent = parseInt(document.getElementById("numOfguess").textContent) - 1;
                if (document.getElementById("numOfguess").textContent ==0){
                    alert("You are loser!")
                    badGuesses = [];
                    document.getElementById("guessedLetters").textContent = badGuesses.join(",");
                    document.getElementById("numOfguess").textContent = 15;
                    randObj = randomWord[Math.floor(Math.random() * randomWord.length)];
                    word = randObj.name;
                    document.getElementById("currentWord").textContent = makeSlash(word);
                }
            }
        }
    }

}
        // } //keypressed in rightguesses :
        //     for eachword in rightgueeses:
        //         if eachword == keypressed then :
        //         change index of currword = index of keypressed in rightguesses
        //         remove from rightguesses index which was guessed
        //         if (rightGuesses.length ==0){
        //             alert("You won");
        //             numofguess ==15;
        //             word = randomWord[Math.floor(Math.random() * randomWord.length)].name;
        //             document.getElementById("currentWord").textContent = makeSlash(word);
        //             numofWins = parseInt(document.getElementById("numOfwins").textContent)+1;
        //         }
        // else{

        //     if indexofkeypressed in badguesses >= 0{
        //         alert(you used this letter);
        //     }else{
        //         badGuesses.append(keypressed)
        //         numofguess=numofguess-1;

        //         if numofguess ==0{
        //             alert("You lose!");
        //         }
        //     }

        // }















        // // if (word2Array.indexOf(keyPressed)>=0){
        //     //     for (var i= 0; i < wordArray.length; i++){
        //     //         var ind = word2Array.indexOf(keyPressed) + n;
        //     //         currwordSplit[ind] = word.split("")[ind];
        //     //         document.getElementById("currentWord").textContent = currwordSplit.join("  ");
        //     //         remove(word2Array, word2Array[ind]);
        //     //         console.log(word2Array);
        //     //         i++;
        //     //         n++;
        //     //     }

        //     // }


