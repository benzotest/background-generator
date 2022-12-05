// facebook example

// var database = [
// {
// 	username : "ben",
// 	password : "lol"
// },
// {
// 	username : "sally",
// 	password : "loll"
// },
// {
// 	username : "don",
// 	password : "lolll"
// },];

// var newsFeed = [
// {
// 	username: "bobby",
// 	timeline : "javascript is great"
// },
// {
// 	username: "sally",
// 	timeline : "javascript is great"
// }];

// var usernamePrompt = prompt("whats your username?");
// var passwordPrompt = prompt("whats your password?");

// var databaseLength = database.length;

// function isUserValid (user,pass){
// 	for(var i = 0; i < databaseLength; i++){
// 		if(user === database[i].username && pass === database[i].password){
// 			return true
// 		}
// 	}
// 	return false	
// }

// function signIn (user,pass) {
// 	if(isUserValid(user,pass) === true){
// 		console.log(newsFeed);
// 	}
// 	else {
// 		alert("wrong username and password");
// 	}
// }


// signIn(usernamePrompt,passwordPrompt);

// dom manipulation

// var button = document.getElementById("enter");
// var input = document.getElementById("userInput");
// var ul = document.getElementsByTagName("ul")[0];

// function createListElement(){
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addClick(){
// 	if(input.value.length > 0){
// 		createListElement();
// 	}
// }

// function addEnter(e){
// 	if(input.value.length > 0 && e.keyCode === 13){
// 		createListElement();
// 	}
// }

// button.addEventListener("click", addClick)

// input.addEventListener("keypress", addEnter)


// BACKGROUND GENERATOR

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementsByTagName("body")[0];

console.log(css);
console.log(color2);
console.log(color1);
console.log(body);

function setGradient (){
	console.log(color1.value, color2.value)
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = body.style.background;
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)

