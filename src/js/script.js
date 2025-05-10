// script.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("userForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const telefone = document.getElementById("telefone").value;
            if (name === "" || email === "" || numero === "") {
                alert("Por favor, preencha todos os campos.");
            } else {
                // Simula o envio do formulário
                alert("Obrigado, " + name + "! Suas informações foram enviadas com sucesso.");
                window.location.href = "confirmation.html"; // Redireciona para a página de confirmação
            }
        });
    }
});