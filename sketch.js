var synth;
var player1, player2, player3, player4;
var distorty;

function setup(){
	createCanvas(600, 400);
	background(100, 100, 100);
	synth = new Tone.Synth().toMaster();
	//synth.triggerAttackRelease('C4', '8n');
	//synth.triggerAttackRelease(440, 2);

	//distory = new Tone.Distortion(0.8);s
	
	var player1 = new Tone.Player("").toMaster();
	var player2 = new Tone.Player("").toMaster();
	var player3 = new Tone.Player("").toMaster();
	var player4 = new Tone.Player("").toMaster();
	
	//player.connect(distorty);
	//distorty.toMaster();

	player1.autostart = false;
	player2.autostart = false;
	player3.autostart = false;
	player4.autostart = false;

	//player.playbackRate = 1.5;
	//distorty.wet.value = 0.2;
}

function draw(){
	button("Button 1", 20, 20, 80, 30);	
	button("Button 2", 20, 60, 80, 30);
	button("Button 3", 20, 100, 80, 30);
	button("Button 4", 20, 140, 80, 30);
}

function button(name,x,y,width,height){
	stroke(0);
	fill(255, 100, 0);
	rect(x,y,width,height);
	noStroke();
	fill(255);
	text(name, x * 2, y + 20);
}