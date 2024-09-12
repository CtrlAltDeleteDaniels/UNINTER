document.getElementById('formulario-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('feedback').innerText = 'Sua mensagem foi enviada com sucesso!';
});
