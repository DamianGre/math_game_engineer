let score = 0;
let correctAnswer;
let equationTxt = ``;
let level = 1;
let onlyLevel = 3;
let lifes = 3;
let operationType = 4;
let bestScore;
let time;
let startTimerIsRunning = false;

var heartOne = document.getElementById('image-heart-1');
var heartTwo = document.getElementById('image-heart-2');
var heartThree = document.getElementById('image-heart-3');
var newGameButton = document.getElementById('new-game-button');
var addingOnlyButton = document.getElementById('addition-operation');
var subtractionOnlyButton = document.getElementById('subtraction-operation');
var multiplicationOnlyButton = document.getElementById('multiplication-operation');
var divisionOnlyButton = document.getElementById('division-operation');
var allOperationsButton = document.getElementById('all-operation');


// dodać poziom trudności do wyboru?

function generateEquation() { 

    if(startTimerIsRunning == false){
        timerInterval(); 
        startTimerIsRunning = true;
    }

    time = 7.0; 
    
    if(operationType == 0){
        let number1; 
        let number2; 

        if(onlyLevel == 1){
            number1 = Math.floor(Math.random() * 4);
            number2 = Math.floor(Math.random() * 4);
        }else if(onlyLevel == 2){
            number1 = Math.floor(Math.random() * 6);
            number2 = Math.floor(Math.random() * 6);
        }else if(onlyLevel == 3){
            if(level == 1){
                number1 = Math.floor(Math.random() * 4);
                number2 = Math.floor(Math.random() * 4);
            }else if(level == 2){
                number1 = Math.floor(Math.random() * 6);
            number2 = Math.floor(Math.random() * 6);
            }else if(level == 3){
                number1 = Math.floor(Math.random() * 3 * level) + 1;
                number2 = Math.floor(Math.random() * 3 * level) + 1;
            } 
            else{
                number1 = Math.floor(Math.random() * 3 * level) + 1;
                number2 = Math.floor(Math.random() * 3 * level) + 1;
            }           
        }

        operators = ['+', '-', '*', '/'];
        const operator = operators[operationType];      

        let equation = number1 + " " + operator + " " + number2 + ' = ?';
        equationTxt = `${number1} ${operator} ${number2}`;

        correctAnswer = Number(number1) + Number(number2);

        document.getElementById('equation').innerText = equation;        

        if (!Number.isInteger(correctAnswer) || correctAnswer < 0) {
            generateEquation();
        }
    }
    else if(operationType == 1){
        let number1; 
        let number2; 

        if(onlyLevel == 1){
            number1 = Math.floor(Math.random() * 4);
            number2 = Math.floor(Math.random() * 4);
        }else if(onlyLevel == 2){
            number1 = Math.floor(Math.random() * 6);
            number2 = Math.floor(Math.random() * 6);
        }else if(onlyLevel == 3){
            if(level == 1){
                number1 = Math.floor(Math.random() * 4);
                number2 = Math.floor(Math.random() * 4);
            }else if(level == 2){
                number1 = Math.floor(Math.random() * 6);
            number2 = Math.floor(Math.random() * 6);
            }else if(level == 3){
                number1 = Math.floor(Math.random() * 3 * level) + 1;
                number2 = Math.floor(Math.random() * 3 * level) + 1;
            } 
            else{
                number1 = Math.floor(Math.random() * 3 * level) + 1;
                number2 = Math.floor(Math.random() * 3 * level) + 1;
            }           
        }

        operators = ['+', '-', '*', '/'];
        const operator = operators[operationType];      

        let equation = number1 + " " + operator + " " + number2 + ' = ?';

        equationTxt = `${number1} ${operator} ${number2}`;

        correctAnswer = Number(number1) - Number(number2);

        document.getElementById('equation').innerText = equation;        

        if (!Number.isInteger(correctAnswer) || correctAnswer < 0) {
            generateEquation();
        }
    }
    else if(operationType == 2){
        let number1; 
        let number2; 

        if(onlyLevel == 1){
            number1 = Math.floor(Math.random() * 4);
            number2 = Math.floor(Math.random() * 4);
        }else if(onlyLevel == 2){
            number1 = Math.floor(Math.random() * 6);
            number2 = Math.floor(Math.random() * 6);
        }else if(onlyLevel == 3){
            if(level == 1){
                number1 = Math.floor(Math.random() * 4);
                number2 = Math.floor(Math.random() * 4);
            }else if(level == 2){
                number1 = Math.floor(Math.random() * 6);
            number2 = Math.floor(Math.random() * 6);
            }else if(level == 3){
                number1 = Math.floor(Math.random() * 3 * level) + 1;
                number2 = Math.floor(Math.random() * 3 * level) + 1;
            } 
            else{
                number1 = Math.floor(Math.random() * 3 * level) + 1;
                number2 = Math.floor(Math.random() * 3 * level) + 1;
            }           
        }

        operators = ['+', '-', '*', '/'];
        const operator = operators[operationType];  
        
        if (operator == '*' && level == 1) {
            while (number2 > 5) {
                number2 = Math.floor(Math.random() * 6) + 0;
            };
        }else if (operator == '*' && level == 2) {
            while (number2 > 10) {
                number2 = Math.floor(Math.random() * 10) + 0;
            };
        }

        let equation = number1 + " " + operator + " " + number2 + ' = ?';
        equationTxt = `${number1} ${operator} ${number2}`;

        correctAnswer = Number(number1) * Number(number2);

        document.getElementById('equation').innerText = equation;        

        if (!Number.isInteger(correctAnswer) || correctAnswer < 0) {
            generateEquation();
        }
    }
    else if(operationType == 3){
        let number1; 
        let number2; 

        if(onlyLevel == 1){
            number1 = Math.floor(Math.random() * 4);
            number2 = Math.floor(Math.random() * 4);
        }else if(onlyLevel == 2){
            number1 = Math.floor(Math.random() * 6);
            number2 = Math.floor(Math.random() * 6);
        }else if(onlyLevel == 3){
            if(level == 1){
                number1 = Math.floor(Math.random() * 4);
                number2 = Math.floor(Math.random() * 4);
            }else if(level == 2){
                number1 = Math.floor(Math.random() * 6);
            number2 = Math.floor(Math.random() * 6);
            }else if(level == 3){
                number1 = Math.floor(Math.random() * 3 * level) + 1;
                number2 = Math.floor(Math.random() * 3 * level) + 1;
            } 
            else{
                number1 = Math.floor(Math.random() * 3 * level) + 1;
                number2 = Math.floor(Math.random() * 3 * level) + 1;
            }           
        }

        operators = ['+', '-', '*', '/'];
        const operator = operators[operationType];  
        
        if (operator == '/') {
            while (number2 > 5) {
                number2 = Math.floor(Math.random() * 6) + 1;
            };
        }else if (operator == '/' && level == 2) {
            while (number2 > 10) {
                number2 = Math.floor(Math.random() * 10) + 1;
            };
        }

        if (operator == '/' && number1 < number2) {
            let temp = number1;
            number1 = number2;
            number2 = temp;
        }
        
        let equation = number1 + " " + operator + " " + number2 + ' = ?';
        equationTxt = `${number1} ${operator} ${number2}`;

        correctAnswer = Number(number1) / Number(number2);

        document.getElementById('equation').innerText = equation;        

        if (!Number.isInteger(correctAnswer) || correctAnswer < 0) {
            generateEquation();
        }    
    }  
    else{
        let number1; 
        let number2; 

        if(onlyLevel == 1){
            number1 = Math.floor(Math.random() * 4);
            number2 = Math.floor(Math.random() * 4);
        }else if(onlyLevel == 2){
            number1 = Math.floor(Math.random() * 6);
            number2 = Math.floor(Math.random() * 6);
        }else if(onlyLevel == 3){
            if(level == 1){
                number1 = Math.floor(Math.random() * 4);
                number2 = Math.floor(Math.random() * 4);
            }else if(level == 2){
                number1 = Math.floor(Math.random() * 6);
            number2 = Math.floor(Math.random() * 6);
            }else if(level == 3){
                number1 = Math.floor(Math.random() * 3 * level) + 1;
                number2 = Math.floor(Math.random() * 3 * level) + 1;
            } 
            else{
                number1 = Math.floor(Math.random() * 3 * level) + 1;
                number2 = Math.floor(Math.random() * 3 * level) + 1;
            }           
        }

        operators = ['+', '-', '*', '/'];
        const operator = operators[Math.floor(Math.random() * operators.length)];

        if (operator == '*' && (level == 1 || onlyLevel == 1)) {
            while (number2 > 5) {
                number2 = Math.floor(Math.random() * 3) + 0;
            };
        } else if (operator == '/' && (level == 1 || onlyLevel == 1)) {
            while (number2 > 5) {
                number2 = Math.floor(Math.random() * 3) + 1;
            };
        } else if (operator == '*' && (level == 2 || onlyLevel == 2)) {
            while (number2 > 10) {
                number2 = Math.floor(Math.random() * 5) + 0;
            };
        } else if (operator == '/' && (level == 2 || onlyLevel == 2)) {
            while (number2 > 10) {
                number2 = Math.floor(Math.random() * 5) + 1;
            };
        };

        if (operator == '/' && number1 < number2) {
            let temp = number1;
            number1 = number2;
            number2 = temp;
        }

        let equation = number1 + " " + operator + " " + number2 + ' = ?';
        equationTxt = `${number1} ${operator} ${number2}`;

        document.getElementById('equation').innerText = equation;

        switch (operator) {
            case '+':
                correctAnswer = Number(number1) + Number(number2)
                break;
            case '-':
                correctAnswer = Number(number1) - Number(number2)
                break;
            case '*':
                correctAnswer = Number(number1) * Number(number2)
                break;
            case '/':
                correctAnswer = Number(number1) / Number(number2)
                break;
        }

        if (!Number.isInteger(correctAnswer) || correctAnswer < 0) {
            generateEquation();    
        } 
    }
}   
     



function startNewGame() {      
    lifes = 3;
    score = 0;    
    document.getElementById('score').innerText = score;
    document.getElementById('new-game-button').style.display = 'none'; 
    document.getElementById('answer-information-container').style.display = 'none'; 
    document.getElementById('new-game-button').style.display = 'none';
    document.getElementById('answer').style.display = 'block';
    document.getElementById('answer').value = '';
    document.getElementById('answer').focus();
    document.getElementById('answer-button').style.display = 'block';
    document.getElementById('equation-container').style.display = 'flex';
    document.getElementById('image-container').style.display = 'flex';
    document.getElementById('lifes').innerText = "";
    generateEquation();
}

function endGame() {
    document.getElementById('answer-information').textContent = 'Brak serduszek! Koniec gry!';
    document.getElementById('answer-score-information').textContent = `Twój wynik to: ${score}`;
    document.getElementById('answer-information-container').style.display = 'flex';
    document.getElementById('new-game-button').style.display = 'flex';
    document.getElementById('answer').style.display = 'none';
    document.getElementById('answer-button').style.display = 'none';
    document.getElementById('equation-container').style.display = 'none';
    document.getElementById('image-container').style.display = 'none';
    if(score > bestScore){
        bestScore = score;
    }
}

function checkAnswer() {
    console.log('sprawdzam odpowiedź')    

    const answer = Number(document.getElementById('answer').value)
    if (answer === correctAnswer) {   
        document.getElementById('answer-information-container').style.display = 'none';     
        document.getElementById('sad-face').style.display = 'none';

        document.getElementById('answer-information-container').style.display = 'flex';
        document.getElementById('answer-information-container').style.backgroundColor  = 'rgb(82, 206, 82)'; 
        document.getElementById('happy-face').style.display = 'flex';
        document.getElementById('answer-information').textContent = 'Poprawna odpowiedź! Brawo!';
        document.getElementById('answer-information').textContent = `${equationTxt} = ${correctAnswer}`;
        document.getElementById('answer-score-information').textContent = '+1 PUNKT!';
        score++;
        document.getElementById('score').innerText = score;

        if (score > level * 10) {
            level += 1;
            document.getElementById('level').innerText = level;
        }
        generateEquation();
        document.getElementById('answer').value = '';
    } else {       
        if (lifes == 1) {
            document.getElementById('answer-information-container').style.display = 'none';
            document.getElementById('happy-face').style.display = 'none';

            document.getElementById('answer-information-container').style.display = 'flex'; 
            document.getElementById('answer-information-container').style.backgroundColor  = 'rgb(255, 81, 0)';             
            document.getElementById('sad-face').style.display = 'flex';
            document.getElementById('answer-information').textContent = 'ZŁA ODPOWIEDŹ!';
            document.getElementById('answer-information').textContent = `${equationTxt} = ${correctAnswer}`;
            document.getElementById('answer-score-information').textContent = '-1 Serduszko!';

            if(score != 0){
                score--;
            }
            lifes--;            
            document.getElementById('lifes').innerText = "Koniec gry"; 
        } else {
            document.getElementById('answer-information-container').style.display = 'none';
            document.getElementById('happy-face').style.display = 'none';

            document.getElementById('answer-information-container').style.display = 'flex';
            document.getElementById('answer-information-container').style.backgroundColor  = 'rgb(255, 81, 0)'; 
            document.getElementById('sad-face').style.display = 'flex';
            document.getElementById('answer-information').textContent = 'ZŁA ODPOWIEDŹ!';
            document.getElementById('answer-information').textContent = `${equationTxt} = ${correctAnswer}`;
            document.getElementById('answer-score-information').textContent = '-1 Serduszko!';
            if(score != 0){
                score--;
            }
            lifes--;
            generateEquation();
            document.getElementById('answer').value = '';
        }
    }    

    if (lifes == 0) {
        endGame();
    }
}

function timerInterval(){
    time = 7;   

    let timer = setInterval(() => {
        document.getElementById('timer-text').innerText = time;
        document.getElementById('score').innerText = score;
        document.getElementById('best-score').innerText = bestScore;
        console.log(timer)
        time--;

        if(time < 0){
            clearInterval(timer);
            startTimerIsRunning = false;
            checkAnswer();
        }

        if(lifes == 3){         
            heartOne.style.display = 'flex';         
            heartTwo.style.display = 'flex';   
            heartThree.style.display = 'flex';
        }else if(lifes == 2){                  
            heartThree.style.display = 'none';            
        }else if(lifes == 1){         
            heartTwo.style.display = 'none';    
            heartThree.style.display = 'none';            
        }else if(lifes == 0){
            clearInterval(timer);
            startTimerIsRunning = false;
        }

        if(bestScore == undefined){
            bestScore = 0;
        }else if(score > bestScore){
            bestScore = score;
        }

        document.getElementById('timer-text').innerText = time;
        document.getElementById('score').innerText = score;

        if(operationType == 0){
            document.getElementById('operation').innerText = 'tylko dodawanie';
        }else if(operationType == 1){
            document.getElementById('operation').innerText = 'tylko odejmowanie';
        }else if(operationType == 2){
            document.getElementById('operation').innerText = 'tylko mnożenie';
        }else if(operationType == 3){
            document.getElementById('operation').innerText = 'tylko dzielenie';

        }else{
            document.getElementById('operation').innerText = 'losowe działanie';
        }
        

        if(onlyLevel == 3){
            document.getElementById('level').innerText = level;
        }else{
            document.getElementById('level').innerText = 'tylko poziom ' + onlyLevel;
        }

        document.getElementById('best-score').innerText = bestScore;
    }, 1000);          
}



var confirmAnswerButton = document.getElementById('answer-button');
var newGameButton = document.getElementById('new-game-button');

confirmAnswerButton.addEventListener('click', checkAnswer);
newGameButton.addEventListener('click', startNewGame);

confirmAnswerButton.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        checkAnswer()
    }
});

document.getElementById('answer').addEventListener('keyup', function(e){
    if (e.key === 'Enter'){        
        checkAnswer()
    }        
  });

document.getElementById('addition-operation').addEventListener('click', function(e){
    operationType = 0;
    startNewGame();
  });
document.getElementById('subtraction-operation').addEventListener('click', function(e){
    operationType = 1;
    startNewGame();
  });
document.getElementById('multiplication-operation').addEventListener('click', function(e){
    operationType = 2;
    startNewGame();
  });
document.getElementById('division-operation').addEventListener('click', function(e){
    operationType = 3;
    startNewGame();
  });
document.getElementById('all-operation').addEventListener('click', function(e){
    operationType = 4;
    startNewGame();
  });


  document.getElementById('fisrt-level').addEventListener('click', function(e){
    onlyLevel = 1;
    startNewGame();
  });
  document.getElementById('second-level').addEventListener('click', function(e){
    onlyLevel = 2;
    console.log('only level ' + onlyLevel)
    startNewGame();
  });
  document.getElementById('raising-level').addEventListener('click', function(e){
    onlyLevel = 3;
    startNewGame();
  });

  

newGameButton.addEventListener('click', function() {
    newGameButton.style.display = 'none';
    document.getElementById('answer-information-container').style.display = 'none';
    document.getElementById('answer').style.display = 'block';
    document.getElementById('answer-button').style.display = 'block';
    startNewGame();
});

startNewGame();
