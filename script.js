//objeto-mestre "Users"
const Users = { 
	id: {}, //this is where every new User() is stored. Access it thru Users.id[name]
	add(name, color) {
		//this function creates a new User() and stores it into id[name].
		Users.id[name] = Object.create(User);
		Users.id[name].username = name;
		Users.id[name].color = color;
		console.log('Novo usuário criado com sucesso!');
		console.log(Users);
	},
};

//modelo de usuário,
const User = {
	username: '',
	color: '',
	messages: [],
	send(texto) {
		let i = this.messages.length;
		this.messages[i] = ["yyyy-mm-dd-hh-mm", this.username, texto]; //logs message on user
		console.log(this, this.messages[i]);
		messageDisplay(this.username, this.color, texto); //sends info to uptade DOM
	}
};

function getText() {
	let user = document.getElementById('select-user').value; // -> falta o seletor
	let text = document.getElementById('message-input-field').value;
	console.log('tentando enviar mensagem');
	console.log(Users.id[user]);
	Users.id[user].send(text);
}


function messageDisplay(usernameDisplay, usernameColor, textFieldInput) {
	let newPost = document.createElement('div');
	newPost.classList.add('chat-post');
	//if (esse post é seu) { faça ele também ser class yourText };
	let newH3 = document.createElement('h3');
	newH3.classList.add('username-display');
	newH3.textContent = '@' + usernameDisplay;
	newH3.style.color = Users.id[usernameDisplay].color;
	let newPara = document.createElement('p');
	newPara.classList.add('chat-message');
	newPara.textContent = textFieldInput;
	newPost.append(newH3, newPara);
	chatLog.prepend(newPost);
}

var createdUser = false; //só pra que não seja possível enviar mensagens antes de ter um usuário (e talvez 'liberar' o chat só depois)
var chatLog = document.getElementById("chat-log");

console.log("javascript iniciado com sucesso");

//Função base para click, falta Enter ao digitar o name;
// function criadorDeUser(){
// 	let usernameInput = document.getElementById("usernameInputText").value;
// 	document.getElementById("usernameInputText").value = "";
// 	let usernameColor = document.getElementById("usernameInputColor").value;
// 	Users.add(usernameInput, usernameColor);
// 	createdUser = true; //trigger pra liberar chatbox
// 	console.log("novo objeto de usuario criado");
// 	console.log(Users);
// 	document.getElementById("username-display").innerText = String("Novo usuário criado com sucesso: " + Users.id[usernameInput].username);
// }

function criadorDeUser(){
	let usernameInput = document.getElementById("username-input-text").value;
	document.getElementById("username-input-text").value = "";
	let usernameColor = document.getElementById("username-input-color").value;
	Users.add(usernameInput, usernameColor);
	document.getElementById("username-display").innerText = String("Novo usuário criado com sucesso: " + Users.id[usernameInput].username);
}

function addUserOnSelector(usernameInput){
	//chamar para adicionar username no seletor e ter valor: usernameInput;
}

//fazer o scroll começar embaixo
window.onload = function() { chatLog.scrollTop = chatLog.scrollHeight; }

//Falta fazer o selector funcionar e então adicionar a função ao click do Enviar