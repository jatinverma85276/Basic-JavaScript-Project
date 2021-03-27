'use strict';

// document.querySelector('.message').textContent = 'Correct number!'
// document.querySelector('.guess').value = 6

let secretNumber = Math.trunc(Math.random()*21);
//document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highScore = 0;
const displayNumber = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
   const guess = Number(document.querySelector('.guess').value)
   console.log(guess); 

   if(!guess){
       displayNumber('⛔ No Number !!')

    /// Number is Correct of the guess Number...!!

   } else if(guess === secretNumber){
     displayNumber('🎉 You win the game.....!!')
     document.querySelector('.number').textContent = secretNumber;
     document.querySelector('body').style.backgroundColor = '#60b347' 

     document.querySelector('.number').style.width = '30rem';

     if (score > highScore){
       highScore = score;
       document.querySelector('.highscore').textContent = highScore;
     }

    }else if (guess !== secretNumber){
      if (score > 1) {
        displayNumber(guess > secretNumber ? '📈 Number is to high....!!' : '📈 Number is to low....!!');
         score--;
         document.querySelector('.score').textContent = score;
        }else{
          displayNumber('You loss the game....!!');
          document.querySelector('.score').textContent = 0
    }
  }
    // /// Guess is to high....!!!
    // else if(guess > secretNumber){
    // if (score > 1) {
    // document.querySelector('.message').textContent = '📈 Number is to high....!!'
    //  score--;
    //  document.querySelector('.score').textContent = score;
    // }else{
    //   document.querySelector('.message').textContent = 'You loss the game....!!';
    //   document.querySelector('.score').textContent = 0
    // }
  
    // } 
    
    // /// Guess is to low.....!!!

    // else if( guess < secretNumber ){
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Number is to low....!!';
    //      score--;
    //      document.querySelector('.score').textContent = score;
    //     }else{
    //       document.querySelector('.message').textContent = 'You loss the game....!!'
    //       document.querySelector('.score').textContent = 0
    //     }
    // } 
 });

 document.querySelector('.again').addEventListener('click', function(){
  let score = 20;
  secretNumber = Math.trunc(Math.random()*21);
  //document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').textContent = '?'
  displayNumber('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

 })