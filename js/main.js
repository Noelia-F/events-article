'use strict';
var circunference =document.querySelector('.circunference');
var popup = document.querySelector('.popup');
var info = document.querySelector('.container--info');
var buttonInfo = document.querySelector('.button--info');
var close = document.querySelector('.container--close');
var buttonClose = document.querySelector('.button--close');
var container = document.querySelector('.container--choose');
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

//Popup que desaparece pasados 30 segundos.

function disappearPopup() {
	popup.classList.add('hidden');
}

container.addEventListener('mousemove', disappearPopup);
