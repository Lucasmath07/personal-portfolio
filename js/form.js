// 1. Primeiro, "pegamos" o formulário e o popup do seu HTML para o JS
const formulario = document.getElementById('contact-form');
const popup = document.getElementById('popup-success');

// 2. Avisamos ao JS: "Fique de olho! Quando alguém clicar no botão de enviar..."
formulario.addEventListener('submit', function(evento) {
    
    // 3. "PARA TUDO!" -> O comando abaixo impede o navegador de recarregar a página
    evento.preventDefault(); 

    // 4. Pegamos tudo que o usuário digitou (nome, email, mensagem)
    const dados = new FormData(formulario);
    
    // 5. O "Fetch" é como um mensageiro. Ele leva os dados até o FormSubmit.
    fetch(formulario.action, {
        method: 'POST',    // Tipo de envio (POST é para enviar dados)
        body: dados,       // Aqui estão as informações do formulário
        headers: {
            'Accept': 'application/json' // Avisamos que queremos uma resposta em código
        }
    })
    .then(resposta => {
        // 6. Se o mensageiro voltou com uma resposta de "OK"...
        if (resposta.ok) {
            formulario.reset();            // Limpamos os campos do formulário
            popup.style.display = 'block'; // Mudamos o CSS do popup para ele aparecer!
        } else {
            alert("Erro ao enviar.");
        }
    });
});