const userInput=window.prompt('Do you want to know your future? Yes or No?');

Function fortune(userInput,fortunes){
    userInput=userInput.toLocaleLowerCase();
    fortunes=['You will win the lottery','Be cautious, you will lose everything','You will find your true love','You will never find love'];
    if(userInput==='yes') {
        console.log(fortunes[Math.floor(Math.random()*fortunes.length)]);
    } else{
        console.log("Maybe next time!");
    }
};

fortune('yes');