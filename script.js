'use strict';


// gérer le clic sur le bouton "ajouter" ou la touche "Enter"
// récupérer le texte à ajouter dans la liste
// ajouter le texte à la liste

/*
let aaa = document.getElementsByName('newElem')[0];
aaa.addEventListener('keydown', (e) => {
	console.log(`Touche du clavier = ${e.key}`);
});
*/

//document.getElementsByName('newElem')[0].addEventListener('keydown', action => { console.log(`Touche = ${action.key}`) });

document.getElementsByName('newElem')[0].addEventListener('keydown', action => { (action.key == 'Enter') ? addList() : null });
/*let keyboard = document.getElementsByName('newElem')[0].addEventListener('keydown', action => { action.key });
console.log(keyboard);
if(keyboard == 'Enter'){
	addList();
}*/


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
