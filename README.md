# 001-chatbox
---
Buenas! Esse repositório tem uma história interessante por trás.
Mas o **tldr;** é o seguinte:

>Comecei a aprender JavaScript em novembro/21; descobri um curso gratuito
>com 2 meses de duração mantido por empresas de tecnologia que ficavam de
>olho nos alunos e alunas; O primeiro módulo começaria no fim de jan./22; 
>Eu me inscrevi; No início do curso, o professor deu um spoiler do final:
>seremos capazes de criar uma página de site com HTML, CSS e JS em que há
>um pseudo-chat com algumas funcionalidades.

**Assim, do dia 1, eu decidi reproduzir o programa por conta própria.**

O plano era aprender em paralelo o que fosse necessário e ter o chatbox
pronto antes do final do curso - sem copiar código que eu não entenda.

---

## Funcionalidades exigidas

* Página única com duas colunas de conteúdo:
	* À esquerda: título e criação de usuário
	* À direita: chatbox
* Criação de usuário:
	* Espaço para inserir o username
	* Seletor de cor para ser exibida no chat
	* Botão de enviar
* Chatbox:
	* Seletor de usuário
	* Caixa de texto para enviar mensagens
	* Área de exibição das mensagens enviadas
		* Mensagem: usuário com a cor + texto;
		* Exibição em coluna, mais recente abaixo;

---

## Funcionalidades extras (yay)
_Coisas que eu gostaria de adicionar_

* Responsividade
* Página bonita com paleta de cores legal
* Pesquisa de mensagens
	* Por palavra
	* Por usuário
* Ao invés de duas colunas fazer uma coluna só
	* Primeiro aparecer a criação de usuário
	* Depois o chatbox (com botão de voltar)
	* Fazer tudo numa única página via JavaScript

---

### Deadline de conclusão: 01 GAIAN* 2022
*data revista baseado em outras prioridades de estudo

---

# Changelog

2022\E\25 - Criação de Usuários
    ++ add: branch para ajustar a criação de usuários e a organização dos dados nos objetos
    ++ add: objetos "Message" possuem timestamp, carregam nome do autor e corpo de texto
    ++ add: Class Users e Class Message são usadas pra fabricar novos usuários e novas mensagens e passar ambos para o objeto "users" e para o log em "chatbox".
    ++ add: objeto chatbox para conter log de mensagens a serem exibidas (ainda não exibe a partir do log)
* UPCOMING:
* Ajustes na forma de exibição das mensagens no chatbox para exibir o log[]

2022\B\11 - Início dos logs
	+- mudança na descrição do repositório;
	++ adição: "Diagrama Chatbox.drawio" // Para ajudar a pensar a organização da informação de usuários e mensagens;
