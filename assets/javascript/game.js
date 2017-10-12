// Creating variables for the game counters here. (global)

var winCounter = 0;
var lossCounter = 0;
// The randomly guessed number here
var targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text(targetNumber);


// 4 variables for each cyrstal generating random number.
var Cry1 = Math.floor(Math.random() * 11) + 1;
var Cry2 = Math.floor(Math.random() * 11) + 1;
var Cry3 = Math.floor(Math.random() * 11) + 1;
var Cry4 = Math.floor(Math.random() * 11) + 1;

// jquery to log the win and loss counter to html in my page.
$("#winCounter").html(winCounter);
$("#lossCounter").html(lossCounter);

//current score counter
var counter = 0;
$("#curScore").text(counter);

// the game restarting when refreshing the page, opening page, or starting a new round. Setting random numbers again.
function restartGame() {

targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text(targetNumber);
Cry1 = Math.floor(Math.random() * 11) + 1;
Cry2 = Math.floor(Math.random() * 11) + 1;
Cry3 = Math.floor(Math.random() * 11) + 1;
Cry4 = Math.floor(Math.random() * 11) + 1;
counter = 0;
$("#curScore").text(counter);

}

// fucntion for the win alertin the user that he has added everything correctly. WIN!
function win() {

	alert("You win!");
	winCounter ++;
	$("#winCounter").text(winCounter);
	restartGame();
}
// the function if you go over the guessed number
function lose() {

	alert("You lose!");
	lossCounter ++;
	$("#lossCounter").text(lossCounter);
	restartGame();
}
/*on click functions below, all explaining what to do if each crystal is clicked. (adding to the counter) Booleans
at the bottom looking to see if the player won or lost */
$('#Crystal1').on ('click', function(){
    counter = counter + Cry1;
    
    $('#curScore').text(counter); 
          
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#Crystal2').on ('click', function(){
    counter = counter + Cry2;
    
    $('#curScore').text(counter); 
         
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#Crystal3').on ('click', function(){
    counter = counter + Cry3;
    
    $('#curScore').text(counter); 
          
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#Crystal4').on ('click', function(){
    counter = counter + Cry4;
    
    $('#curScore').text(counter); 
         
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  
