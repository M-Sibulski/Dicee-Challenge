var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImgSrc1 = "images/dice" + randomNumber1 + ".png";
var randomImgSrc2 = "images/dice" + randomNumber2 + ".png";
document.getElementById("dice1").src = randomImgSrc1;
document.getElementById("dice2").src = randomImgSrc2;

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "<i class='far fa-flag'></i> Player 1 Wins!";
} else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! <i class='far fa-flag'></i>";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}