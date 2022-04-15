let ascore = 0;
let uscore = 0;
let sscore = 0;

function ashmath(){
	let inputa = document.getElementById("auserInput").value;
	if (isNaN(inputa) === false){
		ascore += parseInt(inputa)
		document.getElementById("ascore").innerHTML = ascore;
		document.getElementById("auserInput").value = '';
	} else {
		alert("Not a number!");
		document.getElementById("auserInput").value = '';
	}
}

function usbmath(){
	let inputu = document.getElementById("uuserInput").value;
	if (isNaN(inputu) === false){
		uscore += parseInt(inputu)
		document.getElementById("uscore").innerHTML = uscore;
		document.getElementById("uuserInput").value = '';
	} else {
		alert("Not a number!");
		document.getElementById("uuserInput").value = '';
	}
}

function shekmath(){
	let inputs = document.getElementById("suserInput").value;
	if (isNaN(inputs) === false){
		sscore += parseInt(inputs)
		document.getElementById("sscore").innerHTML = sscore;
		document.getElementById("suserInput").value = '';
	} else {
		alert("Not a number!");
		document.getElementById("suserInput").value = '';
	}
}

function resetscore(){
	ascore = 0;
	uscore = 0;
	sscore = 0;
	document.getElementById("ascore").innerHTML = ascore
	document.getElementById("uscore").innerHTML = uscore
	document.getElementById("sscore").innerHTML = sscore
}
