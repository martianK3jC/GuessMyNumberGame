'use strict';

let randomNumber = Math.trunc(Math.random() * 20) +1;
let currScore = 20;


let currHighScore = 0;

let score = function() {return --currScore;} 
let tempScore = 0;

//to get button
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    

    if(!guess){
        document.querySelector('.message').textContent = 'Empty input!';
    }else if(guess === randomNumber){
        if(tempScore > currHighScore){
            currHighScore = tempScore;
        }

        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = randomNumber;
        //to change css via js
        document.querySelector('body').style.backgroundColor = '#60b347';
        
        document.querySelector('.label-highscore').textContent = '🏆 Highscore: ' + currHighScore;

    }else if(guess > randomNumber){
        tempScore = score();
        document.querySelector('.label-score').textContent = '💯 Score: ' + tempScore;
        document.querySelector('.message').textContent = 'Too high!';

        if(tempScore <= 0){
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.label-score').textContent = '💯 Score: 0';
        }

    }else if(guess < randomNumber){  
        tempScore = score();
        document.querySelector('.label-score').textContent = '💯 Score: ' + tempScore;
        document.querySelector('.message').textContent = 'Too low!';

        if(tempScore <= 0){
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.label-score').textContent = '💯 Score: 0';
        }
    }
})


document.querySelector('.again').addEventListener('click', function () {
    currScore = 20;
    randomNumber = Math.trunc(Math.random() * 20) +1;

    document.querySelector('.label-score').textContent = '💯 Score: ' + currScore;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.label-highscore').textContent = '🏆 Highscore: ' + currHighScore;
});


