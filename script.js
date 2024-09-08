const inputSenha = document.getElementById('senha');
const olhoFechado = document.querySelector('.olho');
const olhoAberto = document.querySelector('.escondido');

olhoFechado.addEventListener('click', function() {
    if (inputSenha.type === 'password') {
        inputSenha.type = 'text'; 
        olhoFechado.style.display = 'none';
        olhoAberto.style.display = 'block'; 
    }
});

olhoAberto.addEventListener('click', function() {
    if (inputSenha.type === 'text') {
        inputSenha.type = 'password'; 
        olhoAberto.style.display = 'none';
        olhoFechado.style.display = 'block'; 
    }
});