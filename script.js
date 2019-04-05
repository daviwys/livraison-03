'use strict';


// gérer le clic sur le bouton "ajouter" ou la touche "Enter"
// récupérer le texte à ajouter dans la liste
// ajouter le texte à la liste



function addList() {

	let elem = document.getElementsByName('newElem')[0].value;
	//console.log(elem);
	
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
