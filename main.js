// Obter os elementos dos inputs
const nomeInput = document.getElementById("nome");
const corInput = document.getElementById("cor");
const p1Input = document.getElementById("p1")
const p2Input = document.getElementById("p2")
const p3Input = document.getElementById("p3")


// Adicionar evento de "keydown" para o input de nome
nomeInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        let nome = nomeInput.value;
        let cor = corInput.value;
        let p1 = p1Input.value;
        let p2 = p2Input.value;
        let p3 = p3Input.value;
        alert("Olá " + nome + "!");
    }
});

<!--
const(let x1=15);if(x1=p1);print("resposta correta");else print("resposta errada, tente de novo")
const(let x2=24);if(x2=p2);print("resposta correta");else print("resposta errada, tente de novo")
const(let x3=35);if(x3=p3);print("resposta correta");else print("resposta errada, tente de novo")-->


// Adicionar evento de "keydown" para o input de cor
corInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        let nome = nomeInput.value;
        let cor = corInput.value;
        alert("Olá " + nome + "! Sua cor favorita é " + cor + "!");
    }
});