'use strict';

const randomNumber = Math.trunc(Math.random() * 20) +1;
 let currScore = 20;



let score = function() {return --currScore;} 

//to get button
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    
    if(!guess){
        document.querySelector('.message').textContent = 'Empty input!';
    }else if(guess === randomNumber){
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = randomNumber;
        //to change css via js
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.label-highscore').textContent = '🏆 Highscore: ' + currScore ;

    }else if(guess > randomNumber){
        document.querySelector('.label-score').textContent = '💯 Score: ' + score();
        document.querySelector('.message').textContent = 'Too high!';

        if(currScore <= 0){
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.label-score').textContent = '💯 Score: 0';
        }

    }else if(guess < randomNumber){
        document.querySelector('.label-score').textContent = '💯 Score: ' + score();
        document.querySelector('.message').textContent = 'Too low!';

        if(currScore <= 0){
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.label-score').textContent = '💯 Score: 0';
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    currScore = 20;
    document.querySelector('.label-score').textContent = '💯 Score: ' + currScore;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.label-highscore').textContent = '🏆 Highscore: 0';
})