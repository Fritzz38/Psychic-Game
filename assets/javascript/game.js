        
        var arr = "";
        var wins = 0;
        var losses = 0;
        var chances = 9;
        var userGuess = "";
        
            
        var gen = document.getElementById("m");
        gen.innerHTML = wins;

        var fud = document.getElementById("k");
        fud.innerHTML = losses;

        var don = document.getElementById("nom");
        don.innerHTML = chances;

        var g = document.getElementById("letter");

        var options = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 

        var computerGuess = options [Math.floor(Math.random() * options.length)];
         
        console.log(computerGuess);

        
    
        document.onkeyup = function (event) {
	            userGuess = String.fromCharCode(event.keyCode).toLowerCase();
                arr+= userGuess + ", ";
                g.innerHTML = arr;
                dumbledore(userGuess, computerGuess);
	  	}
        
        
         function reset() {
            arr = "";
            g.innerHTML = arr;
            chances = 9;
            don.innerHTML = chances;
            computerGuess = options [Math.floor(Math.random() * options.length)];
         }
            

         function dumbledore (userGuess,computerGuess) {
            
            if (userGuess == computerGuess) {
                 wins++;
                 gen.innerHTML = wins;
                 reset();
                         
            }

            else if (userGuess != computerGuess) {
                  chances--;
                  don.innerHTML = chances;

                  if (chances === 0) {
                             losses++;  
                             fud.innerHTML = losses;  
                             reset();
                    }

            }
            
            
        }
 

