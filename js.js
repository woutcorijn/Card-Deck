var Number = "A";
var CardType = "C";
var RandNumber = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var RandCardType = ["C","D","H","S"];

function Main_function() {
		console.log("Main");
	document.getElementsByClassName("number")[0].innerHTML = Number;
	document.getElementsByClassName("number")[1].innerHTML = Number;

	if (CardType == "D" || CardType == "H") {
		document.getElementsByClassName("number")[0].style.color = "red";
		document.getElementsByClassName("number")[1].style.color = "red";
	} else {
		document.getElementsByClassName("number")[0].style.color = "Black";
		document.getElementsByClassName("number")[1].style.color = "Black";
	}

}

function Card_function() {
console.log("card");
	Number = document.getElementById("Number_select").value;
	CardType = document.getElementById("Type_select").value;
	Main_function()
    document.getElementById("drawing").src = "images/" + Number + CardType + ".png"
}

function random_button() {
console.log("Random");
	Number = RandNumber[Math.floor(Math.random() * 12)];
	CardType = RandCardType[Math.floor(Math.random() * 3)];
	document.getElementById("Number_select").value = Number;
	document.getElementById("Type_select").value= CardType;
	Main_function()
	document.getElementById("drawing").src = "images/" + Number + CardType + ".png"
}

function turn_button() {
	if (document.getElementById("back").style.display == "block") {
	document.getElementById("back").style.display = "none";
	document.getElementById("drawing").style.display = "block";
	document.getElementsByClassName("number")[0].style.display = "block";
	document.getElementsByClassName("number")[1].style.display = "block";
	} else {
	document.getElementById("back").style.display = "block"
	document.getElementById("drawing").style.display = "none";
	document.getElementsByClassName("number")[0].style.display = "none";
	document.getElementsByClassName("number")[1].style.display = "none";
	}
}
