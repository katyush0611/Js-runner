console.log('msg')

var player1 = new Player ('Player 1', '#ff33cc', 'left');
player1.build();
var player2 = new Player ('Player 2', '#0000ff', 'right');
player2.build();

$(document).keydown(e => {
	console.log(e.keyCode)
	switch (e.keyCode) {
		case 87: player1.move(); break;
		case 38: player2.move(); break;
		default: console.log('wrong key')
	}

});