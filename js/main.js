$(document).ready( function() {    
  
  
var userChoice
var computerChoice 
var result 
var options = ['rock', 'paper', 'scissors']


function startGame(e) {
  var userChoice = this.id // the ID of whatever they clicked on 
     
  computerChoice()
  checkWin()
  displayResult()
}

function computerChoice(){
  var index = Math.floor(Math.random()* options.length) //yesterday we did *3 but .length makes more sense 
  return options[index];
}

function checkWin(usersChoice, computerChoice) {
  if(usersChoice === "rock"){
    if(computerChoice === "scissors"){
        console.log( "rock wins");
      } else {
        console.log( "paper wins"); 
      }
    
  }

  if(usersChoice === "paper"){
    if(computerChoice === "rock") {
        console.log( "paper wins");
    } else {
          console.log( "scissors wins");
        }
    
  }

  if(usersChoice === "scissors"){
    if(computerChoice === "rock") {
        console.log( "rock wins");
    } else {
        console.log("scissors wins"); 
      }
    
  }
}

function displayResult(){
  console.log()
}

$('.choice').on('click', function(){
  this.id 
  console.log(this.id)
  startGame(this.id)
})
});