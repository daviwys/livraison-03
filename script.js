'use strict';


// gérer le clic sur le bouton "ajouter" ou la touche "Enter"
// récupérer le texte à ajouter dans la liste
// ajouter le texte à la liste



function addList() {

	let elem = document.getElementsByName('newElem')[0].value;
	//console.log(elem);
	
	// destination du nouvelle élément
	let ul = document.getElementsByTagName('ul')[0];
	// créer le nouvel élément
	let li = `<li>${elem}</li>`;
	// insertion de l'élément
	ul.insertAdjacentHTML('beforeend', li);

	//console.log(li);

}
