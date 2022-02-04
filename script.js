class Usuario {
	constructor(nome) {
		this.nome = nome;
	}
 //inserir pesquisador de msg por usuario
}

var usernames = [];
var createdUser = false;
var makeUserButton = document.getElementById("usernameInputButton");
var chatboxLog = document.getElementById("chat-messages");

console.log("javascript iniciado com sucesso");

function criadorDeUser(){
	let usernameInput = document.getElementById("usernameInputText").value;
	document.getElementById("usernameInputText").value = "";
	let nextUsernameIndex = usernames.length;
	usernames[nextUsernameIndex] = new Usuario(usernameInput); //aqui vão os parâmetros depois
	createdUser = true; //não tenho certeza porque fiz isso
	console.log("novo objeto de usuario criado");
	console.log(usernames[nextUsernameIndex].nome, nextUsernameIndex);
	document.getElementById("usernameDisplay").innerText = "Novo usuário criado com sucesso: @" + usernames[nextUsernameIndex].nome;
}

makeUserButton.addEventListener('click', criadorDeUser);

//fazer o scroll começar embaixo
window.onload = function() { chatboxLog.scrollTop = chatboxLog.scrollHeight; }