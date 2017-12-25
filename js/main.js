'use strict';
var circunference =document.querySelector('.circunference');
var popup = document.querySelector('.popup');
var info = document.querySelector('.container--info');
var buttonInfo = document.querySelector('.button--info');
var close = document.querySelector('.container--close');
var buttonClose = document.querySelector('.button--close');
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

//aparece un botón para acceder de nuevo a la información del popup.

function appearButton() {
	info.classList.remove('hidden');
}

//posibilidad de hacer click y que aparezca de nuevo la información
function appearPopup() {
	popup.classList.remove('hidden');
	info.classList.add('hidden');
	close.classList.remove('hidden');
}

//cerrar el popup con la información de cómo se juega
function closePopup() {
	popup.classList.add('hidden');
	info.classList.remove('hidden');
	close.classList.add('hidden');
}
setTimeout(disappearPopup, 3000);
setTimeout(appearButton, 3000);
console.log(buttonInfo);
buttonInfo.addEventListener('click', appearPopup);
buttonClose.addEventListener('click', closePopup);
