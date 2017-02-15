var synth;
var player1, player2, player3, player4;
var s1 = false;
var s2 = false;
var s3 = false;
var s4 = false;
var distorty;

//test var
var c;

function setup(){
	createCanvas(600, 400);
	c = color(100, 100, 100);
	synth = new Tone.Synth().toMaster();
	//synth.triggerAttackRelease('C4', '8n');

	//distory = new Tone.Distortion(0.8);
	
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
	background(c);
	button("Sample 1", 20, 20, 80, 30);	
	button("Sample 2", 20, 60, 80, 30);
	button("Sample 3", 20, 100, 80, 30);
	button("Sample 4", 20, 140, 80, 30);
	button("\t STOP", 20, 300, 80, 30);

	if(s1 == true){
		fill(150);
		rect(125, 20, 450, 350);

		effectButtons();
	}

	if(s2 == true){
		fill(150);
		rect(125, 20, 450, 350);

		effectButtons();
	}

	if(s3 == true){
		fill(150);
		rect(125, 20, 450, 350);

		effectButtons();
	}

	if(s4 == true){
		fill(150);
		rect(125, 20, 450, 350);

		effectButtons();
	}
}

function effectButtons(){
	button("Attack", 150, 60, 80, 50);
	button("Decay", 150, 130, 80, 50);
	button("Sustain", 150, 200, 80, 50);	
	button("Release", 150, 270, 80, 50);
}

function button(name,x,y,width,height){
	stroke(0);
	fill(255, 100, 0);
	rect(x,y,width,height);
	noStroke();
	fill(255);
	text(name, x * 1.7, y + 20);
}

function mousePressed(){
	if((mouseX >= 20) && (mouseX <= 100) &&
		(mouseY >= 20) && (mouseY <= 50)){
			c = color(155, 0, 0);
			s1 = true;
			s2 = false;
			s3 = false;
			s4 = false;
			synth.triggerAttackRelease(440, 0.1);		
		}
	else if((mouseX >= 20) && (mouseX <= 100) &&
		(mouseY >= 60) && (mouseY <= 90)){
			c = color(0, 155, 0);
			s1 = false;
			s2 = true;
			s3 = false;
			s4 = false;
			synth.triggerAttackRelease(440, 0.1);
		}
	else if((mouseX >= 20) && (mouseX <= 100) &&
		(mouseY >= 100) && (mouseY <= 130)){
			c = color(0, 0, 155);
			s1 = false;
			s2 = false;
			s3 = true;
			s4 = false;
			synth.triggerAttackRelease(440, 0.1);
		}
	else if((mouseX >= 20) && (mouseX <= 100) &&
		(mouseY >= 140) && (mouseY <= 170)){
			c = color(0, 255, 255);
			s1 = false;
			s2 = false;
			s3 = false;
			s4 = true;
			synth.triggerAttackRelease(440, 0.1);
		}
	else if((mouseX >= 20) && (mouseX <= 100) &&
		(mouseY >= 300) && (mouseY <= 330)){
			s1 = false;
			s2 = false;
			s3 = false;
			s4 = false;
			c = color(100, 100, 100);
		}
}