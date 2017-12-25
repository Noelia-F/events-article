'use strict';
var circunference =document.querySelector('.circunference')

function changeColor(){
	//cambiar color
	var computedStyle = getComputedStyle(this);
	circunference.style.backgroundColor= computedStyle.backgroundColor;
}
function addListeners (){
	var buttons = document.querySelectorAll('.button');
	for (var i=0;i < buttons.length; i++){
		buttons[i].addEventListener('click',changeColor);
		buttons[i].addEventListener('mouseover',changeColor);
  }
}
addListeners();
