// declarando o campo de jogo selecionando a div
let campoJogo = document.getElementById("containerInit");
let main = document.querySelector("main"); // declarando a main
let campoBotao = document.getElementById("campoButton"); // declarando o campo do botão
let botaoIniciar = document.getElementById("btn-id"); // pegando o botao iniciar
botaoIniciar.addEventListener("click", iniciarJogo); // ao clicar no botão iniciar, chamar o jogo

let tocarMusica = document.getElementById("tocaMusica");
let pararMusica = document.getElementById("pararMusica");

// habilitando a música
function habilitarMusica() {
    tocarMusica.addEventListener("click", () => {
    let audio = document.querySelector("audio");
    audio.currentTime = 0.20;
    audio.play();
    })
}

function desabilitarMusica() {
    pararMusica.addEventListener("click", () => {
        let audio = document.querySelector("audio");
        audio.pause();
    })
}

habilitarMusica();
desabilitarMusica();

function iniciarJogo() {
    clearGame();
    showMessage(`Estamos num apocalipse, tudo de ruim está acontecendo, e você precisará tomar algumas decisões,
    que levarão você a morte ou continuará vivendo!`);
    showMessage(`Você está na sua casa, sem notícias de familiares e amigos, pois não há mais internet e serviços de telefonia.`);
    showMessage(`Se encontrando nesse cenário, você:`);
    faseUm();
}

function faseUm() {
    let btn = document.getElementById("campoButton");
    btn.innerHTML = `
    <button onclick="faseDois()"> Vai atrás de algum familiar/amigo</button>
    <button onclick="faseTres()"> Vai atrás de suprimentos para aonde você mora</button>
    `
    campoBotao.append(btn);
}

function faseDois() {
    clearGame();
    showMessage(`Você foi até seu familiar/amigo e encontra a casa aberta, e na parte térrea não há ninguém:`);
    let btn = document.getElementById("campoButton");
    btn.innerHTML = `
    <button onclick="subirEscadas()"> Decide subir as escadas</button>
    <button onclick="sairDaCasa()"> Decide sair da casa e vai embora</button>
    `
    campoBotao.append(btn);
}

function subirEscadas() {
    clearGame();
    campoBotao.innerHTML = "";
    vocePerdeu("Eram ladrões que estavam em cima e todos os moradores estão mortos! E o ladrão atira bem em sua cabeça e você MORREU!")
}

function sairDaCasa() {
    clearGame();
    showMessage(`Já que não achou a pessoa que queria encontrar, acha melhor voltar para a casa.`);
    showMessage(`Você saiu da casa e encontra um grupo de pessoas, que estão recrutando mais pessoas para ir em um lugar super seguro! Você:`);
    let btn = document.getElementById("campoButton");
    btn.innerHTML = `
    <button onclick="faseQuatro()">Não confia nessa conversa afiada e vai embora pra sua casa!</button>
    <button onclick="irComGrupo()">Você confia no projeto e vai junto com esse grupo revolucionista!</button>
    `
    campoBotao.append(btn)
}

function faseTres() {
    clearGame();
    showMessage(`Você vai até um supermercado mais próximo para pegar alguns suprimentos, o mercado está sendo saqueado por todos.`);
    showMessage(`Você está no corredor de bebidas. As águas estão acabando, quando você vai pegar um galão de agua, vem um cara e pede que você ajude a levar um galão de agua para ele, pois não tem força para levar a sua familia no carro. Você:`);
    let btn = document.getElementById("campoButton");
    btn.innerHTML = `
    <button onclick="ajudarPessoa()">Ajuda ele e leva agua até o carro dele</button>
    <button onclick="ignorarPessoa()">Diz que não e segue no mercado</button>
    `;
    campoJogo.append(btn);
}

function ajudarPessoa() {
    clearGame();
    showMessage("Você ajudou ele, ele é um agente da Interpol, e tem um local na praia que está totalmente seguro e ele te levará até lá!");
    voceGanhou();
}

function ignorarPessoa() {
    clearGame();
    showMessage("Você decide não ajudar ele e com isso, quando você está saindo do mercado com suas coisas, vem uma pessoa malfeitora e te apanha por trás e te dá uma facada no peito");
    vocePerdeu();
}

function irComGrupo() { 
    clearGame();
    showMessage(`Você faz parte do grupo agora! E vocês possuem varios carros, todos estão dentro de carros, rumo ao lugar seguro, que segundo o lider, é um clube que fica no centro da cidade!`);
    showMessage(`Vocês conseguem chegar no clube e lá, conseguiram fazer um lugar SUPER secreto que há segurança e o CAOS não chegou! Voce viverá lá e tem tudo que você precise até o CAOS no resto do mundo acabar`);
    voceGanhou();
}


function faseQuatro() {
    clearGame();
    campoBotao.innerHTML = "";
    showMessage(`Você chega em casa e de repente, um de seus amigos convida a você a sair e fugir dali. Você:`);
    let btn = document.getElementById("campoButton");
    btn.innerHTML = `
     <button onclick="fugir()">Você vai com ele e foge dali</button>
     <button onclick="ficarEmCasa()">Você fica na sua própria casa</button>
    `   
}

function fugir() {
    clearGame();
    showMessage(`Você fugiu com seu amigo mas foram atropeladores ao sairem de casa!`);
    vocePerdeu();
}

function ficarEmCasa() {
    clearGame();
    showMessage(`Você preferiu ficar em casa e esperou por ajuda! Seu primo, que é agente de segurança de seu país, vai até sua casa e te leva para um lugar seguro!`)
    voceGanhou();
}

function clearGame() {
    campoJogo.innerHTML = "";
}

function showMessage(mensagem) {
    let texto = document.createElement("p");
    texto.textContent = mensagem;
    texto.classList.add("mensagem");
    campoJogo.append(texto);
}

function voceGanhou() {
    let img = document.querySelector("body");
    img.classList.add("img-vencedor");
    campoBotao.innerHTML = "";

}

function vocePerdeu(mensagem) {
    let img = document.querySelector("body");
    img.classList.add("img-perdedor")
    campoBotao.innerHTML = "";
    showMessage(mensagem);
}