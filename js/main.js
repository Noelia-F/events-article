'use strict';
var circunference =document.querySelector('.circunference')
var lastColor = getComputedStyle(circunference).backgroundColor;

function changeColor(){
	var computedStyle = getComputedStyle(this);
	lastColor = computedStyle.backgroundColor;
	circunference.style.backgroundColor= computedStyle.backgroundColor;
}
function showColor(){
	lastColor = getComputedStyle(circunference).backgroundColor;
	var computedStyle = getComputedStyle(this);
	circunference.style.backgroundColor= computedStyle.backgroundColor;
}
function restoreColor(){
	circunference.style.backgroundColor = lastColor;
}
function addListeners (){
	var buttons = document.querySelectorAll('.button');
	for (var i=0;i < buttons.length; i++){
		buttons[i].addEventListener('click',changeColor);
		buttons[i].addEventListener('mouseover',showColor);
		buttons[i].addEventListener('mouseout',restoreColor);
  }
}
addListeners();
