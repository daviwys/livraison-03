'use strict';


document.getElementsByName('newElem')[0].addEventListener('keyup', action => { (action.key == 'Enter') ? addList() : null });

function addList() {

	let elem = document.getElementsByName('newElem')[0].value;
	
	// Field empty check
	if(elem == ''){
		return console.log( 'champ vide :(' )	;
	}

	// Capitalize 1st letter
	elem = capitalize(elem);

	// comparer elem à la liste : ne pas ajouter si existe déjà !
	let list = document.getElementsByTagName('li');
	for(let item of list){
		if( elem == item.textContent ) return console.log( 'Item déjà présent !');
	}

	// destination of new element
	let ul = document.getElementsByTagName('ul')[0];
	// Create new element
	let li = `<li class="deleteLi"><img src="img/trash.png" class="icone" /> &nbsp;&nbsp;&nbsp; </li><li onclick="this.classList.toggle('crossedLi')">${elem}</li>`;
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
