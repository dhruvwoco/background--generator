
// Variable definition
var input = document.getElementById("userinput");
var enter = document.getElementById("enter");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

//function definition 

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	var enter = document.createElement('button');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(enter);
	enter.innerHTML="X";
	input.value="";
	liClickEvent();
	buttonListElement();
}

function addElementAtClick(){
	if(inputLength()>0){
		createListElement();
	}

}

function addElementAtKeyPress(event){
	if(inputLength()>0 && event.keyCode === 13 ){
		createListElement();
	}
}

function changeClass(){
	this.classList.toggle('done');
}

function liClickEvent(){
	for(var i = 0; i<li.length;i++){
		li[i].addEventListener('click', changeClass) 
	}
}

function buttonListElement(){
	var enter = document.querySelectorAll('li button');
	for(i=0; i<enter.length; i++){
		enter[i].addEventListener("click",clearElement);
	}
}

function clearElement(){
	this.parentNode.remove();
}


liClickEvent();
buttonListElement();
enter.addEventListener("click",addElementAtClick);
input.addEventListener("keypress", addElementAtKeyPress);