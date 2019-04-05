'use strict';


document.getElementsByName('newElem')[0].addEventListener('keydown', action => { (action.key == 'Enter') ? addList() : null });

function addList() {

	let elem = document.getElementsByName('newElem')[0].value;
	//console.log(elem);
	
	// Capitalize 1st letter
	elem = capitalize(elem);

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
