score = Math.round(Math.random() * 50)
var numberGame = function(){
    if (score >= 4 && score <= 12 || score >= 28 && score <= 31 || score >= 46 && score <= 49){
        console.log('Your have won with a score of '+ score);

    }else{
        console.log('You have lost with a score of '+ score + '. Please try again.');
    }
    
}

numberGame();
