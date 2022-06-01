//modelo de usuário,
class User {
	constructor(name,color){
		this.username = name;
		this.color = color;
		this.messages = [];
	}
	send(message) {
		this.messages.unshift(message); //logs message on user
		console.log(this," has just sent ", this.messages[0]);
		chatbox.newMessage(message);
		// messageDisplay(this.username, this.color, texto);
	}
}

class Message {

	constructor(username,text) {
		this.date = new Date();
		this.author = username;
		this.textContent = text;
		this.id = users.id[username].messages.length;
	}

	get timestamp() {
		const fullTimeStamp = [
			this.date.getFullYear(),
			this.date.getMonth()+1,
			this.date.getDate(),
			this.date.getHours(),
			this.date.getMinutes(),
			this.date.getSeconds(),
			this.date.getMilliseconds()
		];
		return fullTimeStamp;
	}

	edit(text) {
		users.id[this.author].messages[this.id].textContent = text;
		this.textContent = text;
	}
}


// variables
let textArea = document.getElementById("message-input-field");


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
	get available() {
		return (Object.keys(users.id).length !== 0);
	},
	get display() {
		return document.getElementById("chat-log");
	},
	newMessage(message) {
		this.log.unshift(message);
		console.log("New message added to chatbox log");
		this.messageDisplay(message);

	},
	update() {
		if(this.log[0]) {
			console.log("Updating chat... last message was: ", this.log[0]);
			setTimeout(()=>{this.update()}, 10000);
		} else {
			console.log("No new messages yet.");
			setTimeout(()=>{this.update()}, 20000);
		}
	},
	messageDisplay(message) {
		// <div class='chat-post'> wrapper for chatbox message html elements
		const newPost = document.createElement('div');
		newPost.classList.add('chat-post');
		if (users.id[message.author].username == document.getElementById('select-user').value) {
			newPost.classList.add('your-text');
		}
		newPost.style["border-color"] = `${users.id[message.author].color}`;
		// TO DO => if (esse post é seu) { faça ele também ser class yourText };

		// the <h3 class="username-display"> for "author" of Message obj
		const newH3 = document.createElement('h3');
		newH3.classList.add('username-display');
		newH3.textContent = '::' + message.author;
		newH3.style.color = users.id[message.author].color;
		//now the <p class='chat-message'> element for textContent of Message obj
		const newP = document.createElement('p');
		newP.classList.add('chat-message');
		newP.textContent = message.textContent;
		// append everything to <div> and send to chatbox.display html object
		newPost.append(newH3, newP);
		chatbox.display.prepend(newPost);
	}
};

//simple handler for keypress event
const handleEnterKey = k => {
	if (k.key == "Enter") 
		sendMessage();
}

// send message from chatbox input to users.id[username] obj
function sendMessage() {
	if (textArea.value.trim()) {
		textArea.style["border-color"] = "#1A1A1A";
		const username = document.getElementById('select-user').value;
		const text = textArea.value.trim();
		textArea.value = "";
		// build a new message object
		const message = new Message(username,text);
		// send the message obj to user send method
		users.id[username].send(message);
		console.log("new message created and sent to user object");
	} else {
		textArea.style["border-color"] = "red";
		textArea.value = "";
	}
}

function newUser(){
	const usernameInput = document.getElementById("username-input-text").value;
	const usernameColor = document.getElementById("username-input-color").value;
	document.getElementById("username-input-text").value = "";

	users.add(usernameInput, usernameColor);
	addUserOnSelector(usernameInput);
	
	document.getElementById("username-display").textContent = String("Novo usuário criado com sucesso: " + users.id[usernameInput].username);
}

function addUserOnSelector(usernameInput){
	//chamar para adicionar username no seletor e ter valor: usernameInput;
	const selector = document.getElementById('select-user');
	const newOption = document.createElement('option');
	newOption.value = usernameInput;
	newOption.textContent = usernameInput;
	selector.append(newOption);
	if (chatbox.available) {
		toChatbox(); 
		selector.disabled = false;
		document.getElementById('send-button').disabled = false;
		document.getElementById('send-button').style["border-color"] = users.id[selector.value].color;
		
	}
}

function toChatbox() {
	document.getElementById("intro").style.opacity = 0;
	setTimeout(()=>{
		document.getElementById("chat-area").style.display = "flex";
	},500);
	setTimeout(()=>{
		document.getElementById("intro").remove();
		document.getElementById("chat-area").style.opacity = 1;
		textArea.addEventListener("keyup", handleEnterKey);
	},1000);
}

//fazer o scroll começar embaixo
window.onload = function() { 
	chatbox.display.scrollTop = chatbox.display.scrollHeight;
	document.getElementById("intro").addEventListener("keydown",(k)=>{
		if(k.key == "Enter") {
			newUser();
		}
	});
	mockInitialMessages(); // teste de mensagens
}


// --------------------------------------

function mockInitialMessages() {
	const messages = [
		{
			author: 'Cão',
			userColor: '#FFF000',
			textContent: 'Tirulaa'
		},
		{
			author: 'Ike',
			userColor: 'rgb(245, 121, 0)',
			textContent: 'Tirulei'
		},
		{
			author: 'Cão',
			userColor: '#FFF000',
			textContent: 'Ea quod veritatis aspernatur inventore corrupti quia necessitatibus nihil. Maxime minima maiores consectetur hic. Expedita quasi necessitatibus architecto deserunt vel sunt.'
		},
	]

	messages.map((message) => {
		users.add(message.author, message.userColor);
		users.id[message.author].send(message);
	})
}