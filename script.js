var email  = document.getElementById('email');
var button = document.getElementById('button');
var mensagemErro = document.getElementById('mensagem-erro');

button.addEventListener('click', function(){
    var emailValue = email.value;
    if ((emailValue.length >= 3) && (emailValue.indexOf("@") >= 0)) {
        alert('E-mail preenchido corretamente!');
        mensagemErro.style.display = 'none'; // Esconde a mensagem de erro
    } else {
        // Mostra a mensagem de erro
        mensagemErro.textContent = 'Seu e-mail deve ser maior que 3 caracteres e possuir um "@".';
        mensagemErro.style.display = 'block';
    }
});