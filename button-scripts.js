function button1(){
if(document.tic.sqr1.value == '     ' && turn == 0 && numPlayers == 1) {
		document.tic.sqr1.value = ' X ';
		sqr1T = 1;
		if(turn == 1){
			turn = 0;
		}else{
			turn = 1;
		}
		turn = 1;
		vari();
		check(' X ');
	}
	drawCheck();
}

function button2(){
	if(document.tic.sqr2.value == '     ' && turn == 0 && numPlayers == 1) {
		document.tic.sqr2.value = ' X ';
		sqr2T = 1;
		turn = 1;
		vari();
		check(' X ');
	} else if(document.tic.sqr2.value == '     ' && turn == 1 && numPlayers == 2) {
		document.tic.sqr2.value = ' X ';
		sqr2T = 1;
		turn = 0;
		vari();
		player1Check()} else if(document.tic.sqr2.value == '     ' && turn == 0 && numPlayers == 2) {document.tic.sqr2.value = ' O ';
		sqr2T = 1;
		turn = 1;
		vari();
		player1Check()
}
drawCheck()
}

function button3(){
	if(document.tic.sqr3.value == '     ' && turn == 0 && numPlayers == 1) {
		document.tic.sqr3.value = ' X ';
		sqr3T = 1;
		turn = 1;
		vari();
		check(' X ');} else if(document.tic.sqr3.value == '     ' && turn == 1 && numPlayers == 2) {document.tic.sqr3.value = ' X ';
		sqr3T = 1;
		turn = 0;
		vari();
		player1Check()} else if(document.tic.sqr3.value == '     ' && turn == 0 && numPlayers == 2) {document.tic.sqr3.value = ' O ';
		sqr3T = 1;
		turn = 1;
		vari();
		player1Check()} drawCheck()
}

function button4(){
	if(document.tic.sqr4.value == '     ' && turn == 0 && numPlayers == 1) {
		document.tic.sqr4.value = ' X ';
		sqr4T = 1;
		turn = 1;
		vari();
		check(' X ');} else if(document.tic.sqr4.value == '     ' && turn == 1 && numPlayers == 2) {document.tic.sqr4.value = ' X ';
		sqr4T = 1;
		turn = 0;
		vari();
		player1Check()} else if(document.tic.sqr4.value == '     ' && turn == 0 && numPlayers == 2) {document.tic.sqr4.value = ' O ';
		sqr4T = 1;
		turn = 1;
		vari();
		player1Check()
	} 
	drawCheck();
}

function button5(){
	if(document.tic.sqr5.value == '     ' && turn == 0 && numPlayers == 1) {
		document.tic.sqr5.value = ' X ';
		sqr5T = 1;
		turn = 1;
		vari();
		check(' X ');} else if(document.tic.sqr5.value == '     ' && turn == 1 && numPlayers == 2) {document.tic.sqr5.value = ' X ';
		sqr5T = 1;
		turn = 0;
		vari();
		player1Check()} else if(document.tic.sqr5.value == '     ' && turn == 0 && numPlayers == 2) {document.tic.sqr5.value = ' O ';
		sqr5T = 1;
		turn = 1;
		vari();
		player1Check();
	}
	drawCheck();
}

function button6(){
	if(document.tic.sqr6.value == '     ' && turn == 0 && numPlayers == 1) {
		document.tic.sqr6.value = ' X ';
		sqr6T = 1;
		turn = 1;
		vari();
		check(' X ');
	} else if(document.tic.sqr6.value == '     ' && turn == 1 && numPlayers == 2) {
			document.tic.sqr6.value = ' X ';
			sqr6T = 1;
			turn = 0;
			vari();
		player1Check();
	} else if(document.tic.sqr6.value == '     ' && turn == 0 && numPlayers == 2) {
			document.tic.sqr6.value = ' O ';
		sqr6T = 1;
		turn = 1;
		vari();
		player1Check();
	} 
	drawCheck();
}

function button7(){
	if(document.tic.sqr7.value == '     ' && turn == 0 && numPlayers == 1) {
		document.tic.sqr7.value = ' X ';
	sqr7T = 1;
	turn = 1;
	vari();
	check(' X ');
} else if(document.tic.sqr7.value == '     ' && turn == 1 && numPlayers == 2) {document.tic.sqr7.value = ' X ';
	sqr7T = 1;
	turn = 0;
	vari();
	player1Check()
} else if(document.tic.sqr7.value == '     ' && turn == 0 && numPlayers == 2) {document.tic.sqr7.value = ' O ';
	sqr7T = 1;
	turn = 1;
	vari();
	player1Check();
} 
drawCheck();
}

function button8(){
	if(document.tic.sqr8.value == '     ' && turn == 0 && numPlayers == 1) {document.tic.sqr8.value = ' X ';
		sqr8T = 1;
		turn = 1;
		vari();
		check(' X ');
	} else if(document.tic.sqr8.value == '     ' && turn == 1 && numPlayers == 2) {document.tic.sqr8.value = ' X ';
		sqr8T = 1;
		turn = 0;
		vari();
		player1Check()
	} else if(document.tic.sqr8.value == '     ' && turn == 0 && numPlayers == 2) {document.tic.sqr8.value = ' O ';
		sqr8T = 1;
		turn = 1;
		vari();
		player1Check();
	} 
	drawCheck();
}

function button9(){
	if(document.tic.sqr9.value == '     ' && turn == 0 && numPlayers == 1) {document.tic.sqr9.value = ' X ';
		sqr9T = 1;
		turn = 1;
		vari();
		check(' X ');
	} else if(document.tic.sqr9.value == '     ' && turn == 1 && numPlayers == 2) {document.tic.sqr9.value = ' X ';
		sqr9T = 1;
		turn = 0;
		vari();
		player1Check()
	} else if(document.tic.sqr9.value == '     ' && turn == 0 && numPlayers == 2) {document.tic.sqr9.value = ' O ';
		sqr9T = 1;
		turn = 1;
		vari();
		player1Check();
	} 
	drawCheck();
}