var Number = "1";
var CardType = "C";
var cards = ["1","2","3","4","5","6","7","8","9","10","J","Q","K"]

function Card_function() {
	Number = document.getElementById("Number_select").value;
	CardType = document.getElementById("Type_select").value;
	document.getElementsByClassName("number")[0].innerHTML = Number;
	document.getElementsByClassName("number")[1].innerHTML = Number;
	if (CardType == "D" || CardType == "H") {
		document.getElementsByClassName("number")[0].style.color = "red";
		document.getElementsByClassName("number")[1].style.color = "red";
	} else {
		document.getElementsByClassName("number")[0].style.color = "Black";
		document.getElementsByClassName("number")[1].style.color = "Black";
	}
	document.getElementById("drawing").src = "images/" + Number + CardType + ".png"
}

function random_button() {
Math.floor(Math.random() * 13) + 1;	
}

console.log(cards[11];
