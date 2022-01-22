class Usuario {
	constructor(nome) {
		this.nome = nome;
	}
 //inserir pesquisador de msg por usuario
}

var usernames = [];
var createdUser = false;
var makeUserButton = document.getElementById("usernameInputButton");

console.log("javascript iniciado com sucesso");

makeUserButton.onclick = function criadorDeUser(){
	let usernameInput = document.getElementById("usernameInputText").value;
	document.getElementById("usernameInputText").value = "";
	let nextUsernameIndex = usernames.length;
	usernames[nextUsernameIndex] = new Usuario(usernameInput);
	createdUser = true;
	console.log("novo objeto de usuario criado");
	console.log(usernames[nextUsernameIndex].nome, nextUsernameIndex);
	document.getElementById("usernameDisplay").innerText = "Novo usuário criado com sucesso: @" + usernames[nextUsernameIndex].nome;
}
