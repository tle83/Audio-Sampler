var synth;
var player1, player2, player3, player4;
var s1 = false;
var s2 = false;
var s3 = false;
var s4 = false;
var control1 = false;
var control2 = false;
var control3 = false;
var control4 = false;
var dist;
var wetEffect;

function setup(){
	createCanvas(600, 400);
	synth = new Tone.Synth().toMaster();
	dist = new Tone.Distortion(.8);
	
	player1 = new Tone.Player("media/Expressions.mp3").toMaster();
	player2 = new Tone.Player("media/Haunting.wav").toMaster();
	player3 = new Tone.Player("media/Medieval.wav").toMaster();
	player4 = new Tone.Player("media/Bittersweet.wav").toMaster();

	wetEffect = 0;

}

function draw(){
	background(112, 219, 255);
	button("Sample 1", 20, 20, 80, 30);	
	button("Sample 2", 20, 60, 80, 30);
	button("Sample 3", 20, 100, 80, 30);
	button("Sample 4", 20, 140, 80, 30);
	button("\t STOP", 20, 300, 80, 30);

	if(s1 == true){
		fill(146, 116, 213);
		rect(125, 20, 450, 350);

		effectButtons();
		controlButtonPlace();
		
	}

	if(s2 == true){
		fill(146, 116, 213);
		rect(125, 20, 450, 350);

		effectButtons();
		controlButtonPlace();
	}

	if(s3 == true){
		fill(146, 116, 213);
		rect(125, 20, 450, 350);

		effectButtons();
		controlButtonPlace();
	}

	if(s4 == true){
		fill(146, 116, 213);
		rect(125, 20, 450, 350);

		effectButtons();
		controlButtonPlace();
	}
}

function controlButtonPlace(){
	if(control1){
		controlButtons(250, 70, 30, 30);
		controlButtons(300, 70, 30, 30);
		controlButtons(350, 70, 30, 30);
		controlButtons(400, 70, 30, 30);
		controlButtons(450, 70, 30, 30);
	}
	if(control2){
		controlButtons(250, 140, 30, 30);
		controlButtons(300, 140, 30, 30);
		controlButtons(350, 140, 30, 30);
		controlButtons(400, 140, 30, 30);
		controlButtons(450, 140, 30, 30);
	}
	if(control3){
		controlButtons(250, 210, 30, 30);
		controlButtons(300, 210, 30, 30);
		controlButtons(350, 210, 30, 30);
		controlButtons(400, 210, 30, 30);
		controlButtons(450, 210, 30, 30);
	}
	if(control4){
		controlButtons(250, 280, 30, 30);
		controlButtons(300, 280, 30, 30);
		controlButtons(350, 280, 30, 30);
		controlButtons(400, 280, 30, 30);
		controlButtons(450, 280, 30, 30);
	}
}

function controlButtons(x, y, width, height){
	stroke(0);
	fill(255);
	rect(x, y, width, height);
}

function effectButtons(){
	button("Distortion", 150, 60, 80, 50);
	button("Phraser", 150, 130, 80, 50);
	button("Tremolo", 150, 200, 80, 50);	
	button("Pitch", 150, 270, 80, 50);
}

function button(name,x,y,width,height){
	stroke(0);
	fill(255, 138, 112);
	rect(x,y,width,height);
	noStroke();
	fill(255);
	textSize(15);
	if(x > 100){
		text(name, x * 1.08, y + 30);
	}
	else{
		text(name, x * 1.5, y + 20);
	}
}

function mousePressed(){
	//sample 1
	if((mouseX >= 20) && (mouseX <= 100) &&
		(mouseY >= 20) && (mouseY <= 50)){
			s1 = true;
			s2 = false;
			s3 = false;
			s4 = false;
			player1.start();

			player2.stop();
			player3.stop();
			player4.stop();
		}
		//sample 2
	else if((mouseX >= 20) && (mouseX <= 100) &&
		(mouseY >= 60) && (mouseY <= 90)){
			s1 = false;
			s2 = true;
			s3 = false;
			s4 = false;
			player2.start();

			player1.stop();
			player3.stop();
			player4.stop();
		}
		//sample 3
	else if((mouseX >= 20) && (mouseX <= 100) &&
		(mouseY >= 100) && (mouseY <= 130)){
			s1 = false;
			s2 = false;
			s3 = true;
			s4 = false;
			player3.start();

			player1.stop();
			player2.stop();
			player4.stop();
		}
		//sample 4
	else if((mouseX >= 20) && (mouseX <= 100) &&
		(mouseY >= 140) && (mouseY <= 170)){
			s1 = false;
			s2 = false;
			s3 = false;
			s4 = true;
			player4.start();

			player1.stop();
			player2.stop();
			player3.stop();
		}
		//Stop Button
	else if((mouseX >= 20) && (mouseX <= 100) &&
		(mouseY >= 300) && (mouseY <= 330)){
			s1 = false;
			s2 = false;
			s3 = false;
			s4 = false;

			player1.stop();
			player2.stop();
			player3.stop();
			player4.stop();
		}
		//Distortion
	else if((mouseX >= 150) && (mouseX <= 150 + 80) &&
		(mouseY >= 60) && (mouseY <= 60 + 50)){
			control1 = true;
			control2 = false;
			control3 = false;
			control4 = false;

			player1.connect(dist);
			dist.toMaster();
			dist.wet.value = wetEffect;
		}

		//Distortion controls
	else if((control1 == true) && ((mouseX >= 250) && (mouseX <= 250 + 30) &&
		(mouseY >= 70) && (mouseY <= 70 + 30))){
		wetEffect = 0.2;
	}
	else if((control1 == true) && ((mouseX >= 300) && (mouseX <= 300 + 30) &&
		(mouseY >= 70) && (mouseY <= 70 + 30))){
		wetEffect = 0.4;
	}
	else if((control1 == true) && ((mouseX >=350) && (mouseX <= 350 + 30) &&
		(mouseY >= 70) && (mouseY <= 70 + 30))){
		wetEffect = 0.6;
	}
	else if((control1 == true) && ((mouseX >= 400) && (mouseX <= 400 + 30) &&
		(mouseY >= 70) && (mouseY <= 70 + 30))){
		wetEffect = 0.8;
	}
	else if((control1 == true) && ((mouseX >= 450) && (mouseX <= 450 + 30) &&
		(mouseY >= 70) && (mouseY <= 70 + 30))){
		wetEffect = 1;
	}

		//Phraser
	else if((mouseX >= 150) && (mouseX <= 150 + 80) &&
		(mouseY >= 130) && (mouseY <= 130 + 50)){
			control1 = false;
			control2 = true;
			control3 = false;
			control4 = false;

		}
		//Tremolo
	else if((mouseX >= 150) && (mouseX <= 150 + 80) &&
		(mouseY >= 200) && (mouseY <= 200 + 50)){
			control1 = false;
			control2 = false;
			control3 = true;
			control4 = false;
		}
		//Pitch
	else if((mouseX >= 150) && (mouseX <= 150 + 80) &&
		(mouseY >= 270) && (mouseY <= 270 + 50)){
			control1 = false;
			control2 = false;
			control3 = false;
			control4 = true;
		}

}