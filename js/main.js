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
