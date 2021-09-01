console.log ("Bem-vindo");

console.log ("Digite seu nome");
let Nome = ["Levi"];

console.log ("Digite sua idade");
let idade = ["20"];
if (idade.length < 18) {
    console.log ("Idade inválida");
}else{
    console.log ("Idade válida");
}

console.log ("Digite o nome do evento");
let NomeEvento = ["Campus Paia"];

console.log ("Digite a data do seu evento");
let Dataevento = ["20/09/2021"];
let DataAtual = ["data atual"];
if (Dataevento.length + DataAtual.length < 1) {
    console.log ("Data inválida");
}else {
    console.log ("Data válida");
}

console.log ("Digite a quantidade de participantes");
let participantes = ["96"];
if (participantes.length > 100) {
    console.log ("Seu evento excede o limite de participantes");
}else{
    console.log ("Evento cadastrado") 
}

console.log ("Liste participantes e palestrantes")
let ListaDeParticipantes = "Levi, Iago, João, Mateus, Cleber"

console.log ("Cadastro realizado com sucesso!")