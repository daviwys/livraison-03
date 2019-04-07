'use strict';

document.getElementsByName('newElem')[0].addEventListener('keyup', action => { (action.key == 'Enter') ? addList() : null });
document.getElementsByName('qte')[0].addEventListener('keyup', action => { (action.key == 'Enter') ? addList() : null });

let count = 0;
document.getElementsByName('count')[0].innerHTML = 'Qté = ' + count;
function deleteLi(li) {
/*
	// hide item
	let elemLi1 = document.getElementsByName(li + 'b')[0];
	elemLi1.style.cssText = 'display:none;';
	let elemLi2 = document.getElementsByName(li + 'a')[0];
	elemLi2.style.cssText = 'display:none;';
*/

	let elemLi1 = document.getElementsByName(li + 'b')[0];
	elemLi1.remove();
	let elemLi2 = document.getElementsByName(li + 'a')[0];
	elemLi2.remove();
	// Delete <ul> if empty
	let nbrLi = document.getElementsByTagName('li').length; 
	if(nbrLi == 0) {
		let ul = document.getElementsByTagName('ul')[0];
		ul.remove();
	}
	count -= elemLi1.dataset.count ;
}

function addList() {

	let elem = document.getElementsByName('newElem')[0].value;
	let quantity = +document.getElementsByName('qte')[0].value;
	// Field empty check
	if(elem == ''){
		alert('Champ vide !');
		return console.log( 'champ vide :(' )	;
	}

	// Capitalize 1st letter
	elem = capitalize(elem);

	// comparer elem à la liste : ne pas ajouter si existe déjà !
	let list = document.getElementsByTagName('li');
	for(let item of list){
		if( elem == item.textContent ) {
			alert('Item déjà présent !');
			return console.log( 'Item déjà présent !');
		}
	}

	let myUl = document.getElementsByTagName('ul').length;
	if(myUl == 0) {
		let ul = `<ul>
			</ul>`;
		let div = document.getElementsByTagName('div')[0];
		div.insertAdjacentHTML('afterbegin', ul);	
	}

	// destination of new element
	let ul = document.getElementsByTagName('ul')[0];
	// Create new element
	let nameLi = Date.now();
	//let li = `<li name="${nameLi + 'a'}" class="deleteLi"><a href="#" onclick="deleteLi(${nameLi})" title="Delete"><img src="img/trash.png" class="icone" /></a> &nbsp;&nbsp;&nbsp; </li><li name="${nameLi + 'b'}" onclick="this.classList.toggle('crossedLi')">${elem}</li>`;
	let li = `<li name="${nameLi + 'a'}" data-count="${quantity}" class="deleteLi"><a href="#" onclick="deleteLi(${nameLi})" title="Delete"><img src="img/trash.png" class="icone" /></a> &nbsp;&nbsp;&nbsp; </li><li name="${nameLi + 'b'}" onclick="this.classList.toggle('crossedLi')">${elem} (${quantity})</li>`;
	// Insert element
	ul.insertAdjacentHTML('beforeend', li);

	count += quantity;
	document.getElementsByName('count')[0].innerHTML = `Qté = ${count}`;

	// Empty field
	document.getElementsByName('newElem')[0].value='';
	document.getElementsByName('qte')[0].value='1';
	// focus on newElem
	document.getElementsByName('newElem')[0].focus();
}

function capitalize(str) {

	let strTab = str.split('');
	strTab[0] = strTab[0].toUpperCase();
	return strTab.join('');
}

function darkMode() {
	document.getElementsByTagName('link')[0].href = 'dark.css';
	document.getElementsByTagName('button')[0].setAttribute('onclick', `whiteMode()`);
	document.getElementsByTagName('button')[0].innerHTML = 'White mode';
}

function whiteMode() {
	document.getElementsByTagName('link')[0].href = 'style.css';
	document.getElementsByTagName('button')[0].setAttribute('onclick', `darkMode()`);
	document.getElementsByTagName('button')[0].innerHTML = 'Dark mode';
}

