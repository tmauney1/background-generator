var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randBtn = document.getElementById("random");

//call setGradient to match background color
//and input colors on first page load
setGradient();

//set the background og body to the values from the inputs
//display the background color in the h3 (var css)
function setGradient () {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value + ", " 
	+ color2.value + ")";

	css.textContent = body.style.background + ";";
}

//generate a random hexadecimal for left input
//call setGradient with new value
function randomColor1 () {
	var letters = '0123456789ABCDEF';
  	var color = '#';
  	for (var i = 0; i < 6; i++) {
    	color += letters[Math.floor(Math.random() * 16)];
  	}
  	
  	color1.value = color;
  	setGradient();
	
}

//generate a random hexadecimal for right input
//call setGradient with new value
function randomColor2 () {
	var letters = '0123456789ABCDEF';
  	var color = '#';
  	for (var i = 0; i < 6; i++) {
    	color += letters[Math.floor(Math.random() * 16)];
  	}
  	
  	color2.value = color;
  	setGradient();
	
}

//add event listeners to inputs (to set background) and
//to the random button (to generate random colors)
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randBtn.addEventListener("click", randomColor1);

randBtn.addEventListener("click", randomColor2);