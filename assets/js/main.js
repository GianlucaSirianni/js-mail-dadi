/// MAIL

let mailList = ['gian@boolean.com', 'luca@boolean.com', 'gianluca@boolean.com']

let mailingList = document.getElementById('mailingList');

function signUp(){
    let userMail = document.getElementById("userMail").value;
    if (userMail == ""){
        document.getElementById("hackMe").innerHTML = "FILL OUT THE MAIL FIELD!!";
    } else {
        mailList.push(userMail);
        document.getElementById("hackMe").innerHTML = "You Signed Up!";
    }

};

function logIn(){
    let mailCheck = document.getElementById("userMail").value;
    for (let i = 0; i < mailList.length; i++){
        if (mailList[i] == mailCheck){
            document.getElementById("checkLogIn").innerHTML = "You're Logged in!!";
        } else {
            document.getElementById("checkLogIn").innerHTML = "You need to sign up first!";
        }
    }
}

function hackMail(){
    mailingList.innerHTML = '';
    for (let i = 0; i < mailList.length; i++){
        mailingList.innerHTML += `<li>${mailList[i]}</li>`;
     }
}



////DICE GAME


let pcScore = 0;
let userScore = 0;

function diceGame(){

        let userNum = Math.floor((Math.random() * 6)+1);
        let pcNum = Math.floor((Math.random() * 6)+1);
        document.getElementById("userNum").innerHTML = userNum;
        document.getElementById("pcNum").innerHTML = pcNum;

        if(userNum > pcNum){
            document.getElementById("result").innerHTML = "You Won!!!";
            userScore += 1;
            console.log(userScore);
            console.log(pcScore);
        } else if(userNum < pcNum){
            document.getElementById("result").innerHTML = "You Lost";
            pcScore += 1;
            console.log(userScore);
            console.log(pcScore);
        } else {
            document.getElementById("result").innerHTML = "It's a tie...";
            console.log(userScore);
            console.log(pcScore);
        }

        if ((pcScore == 10) || (userScore == 10)){
            document.getElementById("result").innerHTML = "GAME OVER!!!" + "click the 'check the score' button to see who won!";
        }

    }
  

function scoreCheck(){
    document.getElementById("score").innerHTML = "You have " + userScore + " points and the PC has " + pcScore + " points.";
}
  

