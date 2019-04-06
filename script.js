'use strict';


document.getElementsByName('newElem')[0].addEventListener('keyup', action => { (action.key == 'Enter') ? addList() : null });

function deleteLi(li) {// FONCTION À CONTINUER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*	let elem1 = document.getElementsByName(li + 'b');
	let elem2 = document.getElementsByName(li + 'a');
	let parent1 = document.getElementsByTagName('ul')[0];
	parent1.removeChild(elem1);
	parent1.removeChild(elem2);*/

	let elemLi1 = document.getElementsByName(li + 'b')[0];
	elemLi1.style.cssText = 'display:none;';
	let elemLi2 = document.getElementsByName(li + 'a')[0];
	elemLi2.style.cssText = 'display:none;';
}

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
	let nameLi = Date.now();
	//let li = `<li name="${nameLi + 'a'}" class="deleteLi"><a href="#" onclick="deleteLi(${nameLi})" title="Delete"><img src="img/trash.png" class="icone" /></a> &nbsp;&nbsp;&nbsp; </li><li name="${nameLi + 'b'}" onclick="this.classList.toggle('crossedLi')">${elem}</li>`;
	let li = `<li name="${nameLi + 'a'}" class="deleteLi"><a href="#" onclick="deleteLi(${nameLi})" title="Delete"><img src="img/trash.png" class="icone" /></a> &nbsp;&nbsp;&nbsp; </li><li name="${nameLi + 'b'}" onclick="this.classList.toggle('crossedLi')">${elem}</li>`;
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

function darkMode() {
	document.getElementsByTagName('link')[0].href = 'dark.css';
}
