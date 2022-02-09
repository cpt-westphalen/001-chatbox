class Usuarios {
	constructor(nome) {
		this.nome = nome;
	}
 //inserir pesquisador de msg por usuario
}

var usernames = []; //deve ter um jeito melhor de unir users
var createdUser = false; //só pra que não seja possível enviar mensagens antes de ter um usuário (e talvez 'liberar' o chat só depois)
var makeUserButton = document.getElementById("usernameInputButton");
var chatboxLog = document.getElementById("chat-messages"); // main div.

console.log("javascript iniciado com sucesso");

//Função base para click e Enter ao digitar o nome;
function criadorDeUser(){
	let usernameInput = document.getElementById("usernameInputText").value;
	document.getElementById("usernameInputText").value = "";
	let nextUsernameIndex = usernames.length;
	usernames[nextUsernameIndex] = new Usuarios(usernameInput); //aqui vão os parâmetros depois
	createdUser = true; //trigger pra liberar chatbox
	console.log("novo objeto de usuario criado");
	console.log(usernames[nextUsernameIndex].nome, nextUsernameIndex);
	document.getElementById("usernameDisplay").innerText = "Novo usuário criado com sucesso: @" + usernames[nextUsernameIndex].nome;
}

makeUserButton.addEventListener('click', criadorDeUser);

//fazer o scroll começar embaixo
window.onload = function() { chatboxLog.scrollTop = chatboxLog.scrollHeight; }