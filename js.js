var Number = "1";
var CardType = "C";

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
