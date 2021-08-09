var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
// console.log(randomNumber1);
document.querySelector(".img1").setAttribute("src" , "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src" , "images/dice" + randomNumber2 + ".png");

if(randomNumber1 > randomNumber2){
	document.querySelector(".container h1").innerHTML = "<i class='fas fa-flag'></i> Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
	document.querySelector("h1").innerHTML = "Player 2 Wins! <i class='fas fa-flag'></i>";
}
else {
	document.querySelector("h1").innerHTML = "<i class='fas fa-flag'></i> Draw! <i class='fas fa-flag'></i>";
}