window.onload = function(){
var hexNumbers = [0,1,2,3,4,5,6,7,8,9, 'A', 'B','C','D','E','F'];	
var hexBtn = document.querySelector('.hexBtn');
var bodyBd = document.querySelector('body');
var hex = document.querySelector('.hex');

//add Event Listener

hexBtn.addEventListener('click',getHex);  //call function

function getHex(){
	//random color
	var hexCol = '#';
	
	//we need a random hex code formed by 6 elements , numbers and letters
	for(var i=0;i<6; i++){
		
		var random = Math.floor(Math.random()*hexNumbers.length);
//add this random nr to the #
        hexCol+=hexNumbers[random];	//the random nr. picked from the hexNumbers array
        // console.log(hexCol);	
		
	}
	
	bodyBd.style.backgroundColor = hexCol;  
    hex.innerHTML = hexCol;	
	
	
	      
 }
}