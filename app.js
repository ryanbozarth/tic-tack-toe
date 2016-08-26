$(function() {
  

var nextTurn = 'X'
// onload present new game

// allow player one to click on square, and give them a X

$(".item" ).click(function() {
  $(this).append("<i class='material-icons xsymbol'>clear</i>");
  

});

$(".item" ).dblclick(function() {
  $(this).append("<i class='material-icons osymbol'>radio_button_unchecked</i>");
  // prevent them from a second turn
  
});

// prevent player one from taking a second turn

function changeTurn(){
	if(nextTurn == 'X'){
		nextTurn = '0';
	}
	else {
		nextTurn = 'X';
	}
}

// allow player two to double click on a square, and give them 0

// end game after somebody has three in a row

// provide button to start new game 





    

});