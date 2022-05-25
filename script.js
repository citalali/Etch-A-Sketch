var containerList = [];
var containerNumber ;
var container = document.querySelector('#mainDiv');
var div ; 

for (x=0; x<256; x++) {
	div = document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.height = '32px';
div.style.width = '32px';
containerNumber = x ;
containerList[x] = div;


mainDiv.appendChild(div);
	
} 

	containerList.forEach(item =>{
		item.addEventListener('mouseover', event => {
			item.style.backgroundColor = 'green';
		});
		
	});
	