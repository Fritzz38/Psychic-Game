        
        var arr = "";
        var wins = 0;
        var losses = 0;
        var chances = 9;
        var userGuess="";
                
        var gen = document.getElementById("m");
        gen.innerHTML = wins;

        var fud = document.getElementById("k");
        fud.innerHTML = losses;

        var don = document.getElementById("nom");
        don.innerHTML = chances;


        var options = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 

        var computerGuess = options [Math.floor(Math.random() * options.length)];

        console.log(computerGuess);   
    
        document.onkeyup = function (event) {
	    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        dumbledore(userGuess, computerGuess);
        arr+= userGuess + ", ";
        var g = document.getElementById("letter");
        g.innerHTML = arr;
	  	}
        
                
        function dumbledore (userGuess,computerGuess) {
            if (computerGuess == userGuess) {
                 wins++;
                 var gen = document.getElementById("m");
                 gen.innerHTML = wins;
                 computerGuess = options [Math.floor(Math.random() * options.length)];

            }

            else {
                chances--;
                var don = document.getElementById("nom");
                don.innerHTML = chances;

                if (chances === 0) {
                    losses++;  
                    var fud = document.getElementById("k");
                    fud.innerHTML = losses;               
                    chances = 9;
                    computerGuess = options [Math.floor(Math.random() * options.length)];}

            }

        }

        // computer need to produce random character after:

        // 1. user wins OR

        // 2. user losses (used up all chances)

     
        
          
      
        /* user_guessed = [];

         user_guessed.push(" " + userGuess);
        document.getElementById("userguessed").innerHTML = user_guessed;*/
        


 



