'use strict';


document.getElementsByName('newElem')[0].addEventListener('keyup', action => { (action.key == 'Enter') ? addList() : null });

function addList() {

	let elem = document.getElementsByName('newElem')[0].value;
	//console.log(elem);
	
	// Capitalize 1st letter
	elem = capitalize(elem);

	// comparer elem à la liste : ne pas ajouter si existe déjà !
	let list = document.getElementsByTagName('li');
	console.log(list);

	// destination of new element
	let ul = document.getElementsByTagName('ul')[0];
	// Create new element
	let li = `<li>${elem}</li>`;
	// Insert element
	ul.insertAdjacentHTML('beforeend', li);

	//console.log(li);

	// Empty field
	document.getElementsByName('newElem')[0].value='';
}

function capitalize(str) {

	let strTab = str.split('');
	strTab[0] = strTab[0].toUpperCase();
	return strTab.join('');

}
