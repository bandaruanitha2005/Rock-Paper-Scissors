
            let score=JSON.parse(localStorage.getItem("score"))||{
                    wins:0,
                    losses:0,
                    ties:0,
                };
                updateScore();
            
             function playGame(playerMove){
            const computerGuess = pickedComputerMove();
            let result=" ";
            if(playerMove==='rock'){
            if(computerGuess==='rock'){
            result='tie';
        }else if(computerGuess==='paper'){
            result='you lose';
        }else if(computerGuess==='scissors'){
            result='you win';
        }
    }       else if(playerMove==='paper'){
                if(computerGuess==='rock'){
            result='you win';
        }else if(computerGuess==='paper'){
            result='tie';
        }else if(computerGuess==='scissors'){
            result='you lose';
        }
    }
     else if(playerMove==='scissors'){
        if(computerGuess==='rock'){
            result='you lose';
        }else if(computerGuess==='paper'){
            result='you win';
        }else if(computerGuess==='scissors'){
            result='tie';
        }
    }
    if(result==='you win'){
        score.wins+=1;
    }else if(result==='you lose'){
        score.losses+=1;
    }else if(result==='tie'){
        score.ties+=1;
    }
    localStorage.setItem("score", JSON.stringify(score));
    document.querySelector(".js-result").innerHTML=result;
    document.querySelector(
        ".js-moves").innerHTML=
                `you <img class="move-img" src="pictures/${playerMove}-emoji.png" alt=""/> 
            <img class="move-img" src="pictures/${computerGuess}-emoji.png" alt=""/> computer`;
            
       updateScore();
      }
    function updateScore(){
        document.querySelector(".js-score").innerHTML=`wins :${score.wins},losses : ${score.losses},ties : ${score.ties}`;
;
    }
  function pickedComputerMove(){
    const randomNumber=Math.random();
    let computerGuess='';
    if(randomNumber>0 && randomNumber<1/3){
        computerGuess='rock';
    }else if(randomNumber>1/3 && randomNumber<2/3){
        computerGuess='paper';
    }else if(randomNumber>2/3 && randomNumber<1){
        computerGuess='scissors';
    }

        return computerGuess;
        
}  