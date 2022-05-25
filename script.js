var containerList = [];
var container = document.querySelector('#mainDiv');
var div ; 
var selectionUser;

for (x=0; x<256; x++) {
	div = document.createElement('div');
	div.style.backgroundColor = 'pink';
	div.style.height = '32px';
	div.style.width = '32px';
	containerList[x] = div;
	mainDiv.appendChild(div);
	} 

var colorSelection = document.querySelectorAll('button');
colorSelection.forEach((button) => {
					  button.addEventListener('click', () => {
			 selectionUser = button.id; });});


	containerList.forEach(item =>{
		item.addEventListener('mouseover', event => {
			if (selectionUser == 'color') {
			item.style.backgroundColor = selectRandomColor();
			}
			else if (selectionUser == 'pink') {
				item.style.backgroundColor = 'red';
			}
			else if (selectionUser == 'black') {
			item.style.backgroundColor = 'black';
		}
			else {
				item.style.backgroundColor = 'pink';
			}
		});
		
	});
	


function selectRandomColor() {
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	
  return "#" + randomColor;


	
}