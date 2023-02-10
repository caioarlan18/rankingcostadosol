var info = document.querySelector('a#info')
info.addEventListener("click", () => {
    alert("Esta opção serve somente para organizadores")
})

function info_torneio() {
    location.href = './index.html';
}

var entrar = document.querySelector('input.entrar').addEventListener('click', () => {
    var email = document.querySelector('input.email')
    var senha = document.querySelector('input.senha')
    if (email.value.length == 0 || senha.value.length == 0) {
        alert('Campos vazios')
    }
    else if (email.value != '1234') {
        alert('Email ou senha incorretos')
    } else if (senha.value != '1234') {
        alert('Email ou senha incorretos')
    }
    else {
        location.href = './org.html'
    }
})