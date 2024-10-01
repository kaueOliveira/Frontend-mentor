const nome = document.getElementById("iname");
const last = document.getElementById("ilast");
const email = document.getElementById("iemail");
const general = document.getElementById("igeneral");
const support = document.getElementById("isupport");
const caixa = document.getElementById("ibox");

// Adiciona evento de teclado para cada campo de entrada
nome.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        last.focus();
    }
});

last.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        email.focus();
    }
});

email.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        general.focus();
    }
});

general.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        support.focus();
    }
});

support.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        caixa.focus();
    }
});

// Adiciona evento de teclado para a caixa de seleção
caixa.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btn.focus(); // Move o foco para o botão de envio
    }
});

// Adiciona evento de teclado para o botão de envio
btn.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btn.click(); // Simula o clique no botão de envio
    }
});
//Esse código é apenas para estudo !