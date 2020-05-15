document.getElementById('player1ai').onclick = function() {
	document.getElementById('player1name').disabled = this.value !== '0';
}
document.getElementById('player2ai').onclick = function() {
	document.getElementById('player2name').disabled = this.value !== '0';
}
document.getElementById('player3ai').onclick = function() {
	document.getElementById('player3name').disabled = this.value !== '0';
}
document.getElementById('player4ai').onclick = function() {
	document.getElementById('player4name').disabled = this.value !== '0';
}
document.getElementById('player5ai').onclick = function() {
	document.getElementById('player5name').disabled = this.value !== '0';
}
document.getElementById('player6ai').onclick = function() {
	document.getElementById('player6name').disabled = this.value !== '0';
}
document.getElementById('player7ai').onclick = function() {
	document.getElementById('player7name').disabled = this.value !== '0';
}
document.getElementById('player8ai').onclick = function() {
	document.getElementById('player8name').disabled = this.value !== '0';
}
document.getElementById('Start Game').onclick = function() {
	setup();
}
document.getElementById('resignbutton').onclick = function() {
	game.resign();
}
document.getElementById('proposetradebutton').onclick = function() {
	game.proposeTrade();
}
document.getElementById('canceltradebutton').onclick = function() {
	game.cancelTrade();
}
document.getElementById('accepttradebutton').onclick = function() {
	game.acceptTrade();
}
document.getElementById('rejecttradebutton').onclick = function() {
	game.cancelTrade();
}
