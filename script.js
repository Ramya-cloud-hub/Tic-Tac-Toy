function myfunc() {
	var box1, box1, box3, box4, box5, box6, box7, box8, box9;
	box1 = document.getElementById("box1").value;
	box2 = document.getElementById("box2").value;
	box3 = document.getElementById("box3").value;
	box4 = document.getElementById("box4").value;
	box5 = document.getElementById("box5").value;
	box6 = document.getElementById("box6").value;
	box7 = document.getElementById("box7").value;
	box8 = document.getElementById("box8").value;
	box9 = document.getElementById("box9").value;

	// Checking if Player X won or not and after that disable the remaining cells
	if ((box1 == 'x' || box1 == 'X') && (box2 == 'x' ||
		box2 == 'X') && (box3 == 'x' || box3 == 'X')) {
		document.getElementById('printResult')
			.innerHTML = "Player X won";
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
	}
	else if ((box1 == 'x' || box1 == 'X') && (box4 == 'x' ||
		box4 == 'X') && (box7 == 'x' || box7 == 'X')) {
		document.getElementById('printResult')
			.innerHTML = "Player X won";
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
	}
	else if ((box7 == 'x' || box7 == 'X') && (box8 == 'x' ||
		box8 == 'X') && (box9 == 'x' || box9 == 'X')) {
		document.getElementById('printResult')
			.innerHTML = "Player X won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
	}
	else if ((box3 == 'x' || box3 == 'X') && (box6 == 'x' ||
		box6 == 'X') && (box9 == 'x' || box9 == 'X')) {
		document.getElementById('printResult')
			.innerHTML = "Player X won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
	}
	else if ((box1 == 'x' || box1 == 'X') && (box5 == 'x' ||
		box5 == 'X') && (box9 == 'x' || box9 == 'X')) {
		document.getElementById('printResult')
			.innerHTML = "Player X won";
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
	}
	else if ((box3 == 'x' || box3 == 'X') && (box5 == 'x' ||
		box5 == 'X') && (box7 == 'x' || box7 == 'X')) {
		document.getElementById('printResult')
			.innerHTML = "Player X won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
	}
	else if ((box2 == 'x' || box2 == 'X') && (box5 == 'x' ||
		box5 == 'X') && (box8 == 'x' || box8 == 'X')) {
		document.getElementById('printResult')
			.innerHTML = "Player X won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box9").disabled = true;
	}
	else if ((box4 == 'x' || box4 == 'X') && (box5 == 'x' ||
		box5 == 'X') && (box6 == 'x' || box6 == 'X')) {
		document.getElementById('printResult')
			.innerHTML = "Player X won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
	}


	// Player 0 won or not
	else if ((box1 == '0' || box1 == '0') && (box2 == '0' ||
		box2 == '0') && (box3 == '0' || box3 == '0')) {
		document.getElementById('printResult')
			.innerHTML = "Player 0 won";
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
	}
	else if ((box1 == '0' || box1 == '0') && (box4 == '0' ||
		box4 == '0') && (box7 == '0' || box7 == '0')) {
		document.getElementById('printResult')
			.innerHTML = "Player 0 won";
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
	}
	else if ((box7 == '0' || box7 == '0') && (box8 == '0' ||
		box8 == '0') && (box9 == '0' || box9 == '0')) {
		document.getElementById('printResult')
			.innerHTML = "Player 0 won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
	}
	else if ((box3 == '0' || box3 == '0') && (box6 == '0' ||
		box6 == '0') && (box9 == '0' || box9 == '0')) {
		document.getElementById('printResult')
			.innerHTML = "Player 0 won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
	}
	else if ((box1 == '0' || box1 == '0') && (box5 == '0' ||
		box5 == '0') && (box9 == '0' || box9 == '0')) {
		document.getElementById('printResult')
			.innerHTML = "Player 0 won";
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
	}
	else if ((box3 == '0' || box3 == '0') && (box5 == '0' ||
		box5 == '0') && (box7 == '0' || box7 == '0')) {
		document.getElementById('printResult')
			.innerHTML = "Player 0 won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
	}
	else if ((box2 == '0' || box2 == '0') && (box5 == '0' ||
		box5 == '0') && (box8 == '0' || box8 == '0')) {
		document.getElementById('printResult')
			.innerHTML = "Player 0 won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box9").disabled = true;
	}
	else if ((box4 == '0' || box4 == '0') && (box5 == '0' ||
		box5 == '0') && (box6 == '0' || box6 == '0')) {
		document.getElementById('printResult')
			.innerHTML = "Player 0 won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
	}
	else {
		// Here, Printing Result
		if (flag == 1) {
			document.getElementById('printResult')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('printResult')
				.innerHTML = "Player 0 Turn";
		}
	}
}

// Function to reset all the boxes to empty 
function myfunc_2() {
	location.reload();
	document.getElementById('box1').value = '';
	document.getElementById("box2").value = '';
	document.getElementById("box3").value = '';
	document.getElementById("box4").value = '';
	document.getElementById("box5").value = '';
	document.getElementById("box6").value = '';
	document.getElementById("box7").value = '';
	document.getElementById("box8").value = '';
	document.getElementById("box9").value = '';

}


// and put accordingly value X or 0
flag = 1;
function myfunc_3() {
	if (flag == 1) {
		document.getElementById("box1").value = "X";
		document.getElementById("box1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box1").value = "0";
		document.getElementById("box1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("box2").value = "X";
		document.getElementById("box2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box2").value = "0";
		document.getElementById("box2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("box3").value = "X";
		document.getElementById("box3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box3").value = "0";
		document.getElementById("box3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("box4").value = "X";
		document.getElementById("box4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box4").value = "0";
		document.getElementById("box4").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("box5").value = "X";
		document.getElementById("box5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box5").value = "0";
		document.getElementById("box5").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("box6").value = "X";
		document.getElementById("box6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box6").value = "0";
		document.getElementById("box6").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("box7").value = "X";
		document.getElementById("box7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box7").value = "0";
		document.getElementById("box7").disabled = true;
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		document.getElementById("box8").value = "X";
		document.getElementById("box8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box8").value = "0";
		document.getElementById("box8").disabled = true;
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		document.getElementById("box9").value = "X";
		document.getElementById("box9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box9").value = "0";
		document.getElementById("box9").disabled = true;
		flag = 1;
	}
}
