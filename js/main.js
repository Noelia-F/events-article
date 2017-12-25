'use strict';

var circunference =document.querySelector('.circunference');
var initialColor = getComputedStyle(circunference).backgroundColor;
var lastColor;
var popup = document.querySelector('.popup');
var info = document.querySelector('.container--info');
var buttonInfo = document.querySelector('.button--info');
var close = document.querySelector('.container--close');
var buttonClose = document.querySelector('.button--close');
var container = document.querySelector('.container--choose');


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
	var buttons = document.querySelectorAll('.button--box');
	for (var i=0;i < buttons.length; i++){
		buttons[i].addEventListener('click',changeColor);
		buttons[i].addEventListener('mouseover',showColor);
		buttons[i].addEventListener('mouseout',restoreColor);
  }
}
addListeners();

function reset(){
	circunference.style.backgroundColor = initialColor;
	lastColor = initialColor;
}
var buttonReset = document.querySelector('.button--reset');
buttonReset.addEventListener('click',reset);

//Popup que desaparece cuando se hace un movimiento con el ratón sobre la caja de los colores.

function disappearPopup() {
	popup.classList.add('hidden');
}
container.addEventListener('mousemove', disappearPopup);
//si hace más de 40 segundos que no pasas por ahí el popup vuelve a aparecer con setTimeout
function appearPopup() {
	popup.classList.remove('hidden');
}
setTimeout(appearPopup, 40000);
