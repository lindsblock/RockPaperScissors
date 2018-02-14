function startGame(e) {
  var usersChoice = e.target.id // the ID of whatever they clicked on 
  console.log(usersChoice)   //lists computer's choice 
  computerChoice()
  checkWin(usersChoice)
  displayResult()
}

var choices = document.getElementsByClassName('choice')
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //First load
  }
}