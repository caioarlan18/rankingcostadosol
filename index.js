var menu = document.querySelector('nav.nv')
var sec = document.querySelector('section.sec')
var chave = document.querySelector('section.chav')
var hd = document.querySelector("header.hd")
var back = document.querySelector("div.back")
var orgpage = document.querySelector("section.orgpage")

// menu hamburguer
function menu_hamburguer() {
    menu.classList.toggle('open')
}


// adaptação single page sem framework
function close() {
    menu.classList.remove('open')
}

function reg() {
    sec.classList.add('reg')
    menu.classList.remove("open")
    chave.classList.remove('chaveopen')
    hd.classList.remove('orgopen')
    back.classList.remove("orgopen")
    orgpage.classList.remove("orgpageopen")
}

function home() {
    sec.classList.remove("reg")
    chave.classList.remove('chaveopen')
    menu.classList.remove("open")
    hd.classList.remove('orgopen')
    back.classList.remove("orgopen")
    orgpage.classList.remove("orgpageopen")
}
function chav() {
    chave.classList.add('chaveopen')
    menu.classList.remove("open")
    sec.classList.remove('reg')
    hd.classList.remove('orgopen')
    back.classList.remove("orgopen")
    orgpage.classList.remove("orgpageopen")
}

// menu arrow(submenu home mobile e desktop)
function arrow() {
    // mobile
    var submenu1 = document.querySelector("a.submenu1")
    var submenu2 = document.querySelector("a.submenu2")

    // desktop
    var submenu3 = document.querySelector("a.submenu3")
    var submenu4 = document.querySelector("a.submenu4")

    // mobile
    submenu1.classList.toggle("submenuopen")
    submenu2.classList.toggle('submenuopen')

    // desktop
    submenu3.classList.toggle("submenuopen1")
    submenu4.classList.toggle('submenuopen1')
}


// pagina org.html tabela de pontuação

function atualizarTabela() {
    var tabelaEditavel = document.getElementById("tabelaEditavel");
    document.getElementById("celulaNaoEditavel1").innerHTML = tabelaEditavel.rows[0].cells[0].innerHTML;
    document.getElementById("celulaNaoEditavel2").innerHTML = tabelaEditavel.rows[0].cells[1].innerHTML;
    document.getElementById("celulaNaoEditavel3").innerHTML = tabelaEditavel.rows[1].cells[0].innerHTML;
    document.getElementById("celulaNaoEditavel4").innerHTML = tabelaEditavel.rows[1].cells[1].innerHTML;
}

// pagina do org

function org() {

    hd.classList.add('orgopen')
    sec.classList.remove('reg')
    menu.classList.remove("open")
    chave.classList.remove('chaveopen')
    back.classList.add("orgopen")
    orgpage.classList.remove("orgpageopen")

}

// login page
var info = document.querySelector('a#info')
info.addEventListener("click", () => {
    alert("Esta opção serve somente para organizadores")
})


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
        orgpage.classList.add("orgpageopen")
        email.value = ''
        senha.value = ''
    }
})
