//modelo de usuário,
class User {
	constructor(name,color){
		this.username = name;
		this.color = color;
		this.messages = [];
	}
	send(message) {
		this.messages.unshift(message); //logs message on user
		console.log(this," has just sent ", this.messages[i]);
		chatbox.newMessage(message);
		// messageDisplay(this.username, this.color, texto);
	}
}

class Message {

	constructor(username,text) {
		const now = new Date();
		this.date = [`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`,`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`];
		this.author = username;
		this.textContent = text;
		this.id = users.id[username].messages.length;
	}

	get timestamp() {
		return `${this.date[0]} ${this.date[1]}`;
	}

	edit(text) {
		users.id[this.author].messages[this.id].textContent = text;
		this.textContent = text;
	}
}

// global "users" object
const users = { 
	id: {}, //this is where every new User() is stored. Access it thru users.id[username]
	add(username, color) {
		//this method creates a new User() and stores it into id[username].
		users.id[username] = new User(username,color);
		console.log("New user was created successfully.");
		console.log("The global Users object is now: ", users);
	},
};

//global chatbox object
const chatbox = {
	log: [],
	newMessage(message) {
		this.log.unshift(message);
		console.log("New message added to chatbox log");
	},
	update() {
		if(this.log[0]) {
			console.log("Updating chat... last message was: ", this.log[0]);
			setTimeout(()=>{this.update()}, 10000);
		} else {
			console.log("No new messages yet.");
			setTimeout(()=>{this.update()}, 20000);
		}
	}
};

// send message from chatbox input
function sendMessage() {
	
	const username = document.getElementById('select-user').value;
	const text = document.getElementById('message-input-field').value;
	document.getElementById('message-input-field').value = "";
	
	const message = new Message(username,text);
	users.id[username].send(message);
	console.log("new message created and sent to user object");

	// const author = document.getElementById('select-user').value; // -> falta o seletor
	// const text = document.getElementById('message-input-field').value;
	// console.log('tentando enviar mensagem');
	// console.log(users.id[author]);
	// users.id[author].send(text);
}


function messageDisplay(usernameDisplay, usernameColor, textFieldInput) {
	let newPost = document.createElement('div');
	newPost.classList.add('chat-post');
	//if (esse post é seu) { faça ele também ser class yourText };
	let newH3 = document.createElement('h3');
	newH3.classList.add('username-display');
	newH3.textContent = '@' + usernameDisplay;
	newH3.style.color = users.id[usernameDisplay].color;
	let newPara = document.createElement('p');
	newPara.classList.add('chat-message');
	newPara.textContent = textFieldInput;
	newPost.append(newH3, newPara);
	chatboxLogDisplay.prepend(newPost);
}

let createdUser = false; //só pra que não seja possível enviar mensagens antes de ter um usuário (e talvez 'liberar' o chat só depois)
const chatboxLogDisplay = document.getElementById("chat-log");

console.log("javascript iniciado com sucesso");

//Função base para click, falta Enter ao digitar o name;
// function newUser(){
// 	let usernameInput = document.getElementById("usernameInputText").value;
// 	document.getElementById("usernameInputText").value = "";
// 	let usernameColor = document.getElementById("usernameInputColor").value;
// 	users.add(usernameInput, usernameColor);
// 	createdUser = true; //trigger pra liberar chatbox
// 	console.log("novo objeto de usuario criado");
// 	console.log(users);
// 	document.getElementById("username-display").innerText = String("Novo usuário criado com sucesso: " + users.id[usernameInput].username);
// }

function newUser(){
	const usernameInput = document.getElementById("username-input-text").value;
	const usernameColor = document.getElementById("username-input-color").value;
	document.getElementById("username-input-text").value = "";

	users.add(usernameInput, usernameColor);
	
	document.getElementById("username-display").textContent = String("Novo usuário criado com sucesso: " + users.id[usernameInput].username);
}

function addUserOnSelector(usernameInput){
	//chamar para adicionar username no seletor e ter valor: usernameInput;
}

//fazer o scroll começar embaixo
window.onload = function() { chatboxLogDisplay.scrollTop = chatboxLogDisplay.scrollHeight; }

//Falta fazer o selector funcionar e então adicionar a função ao click do Enviar