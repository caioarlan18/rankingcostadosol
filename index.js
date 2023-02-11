var menu = document.querySelector('nav.nv')
var sec = document.querySelector('section.sec')
var chave = document.querySelector('section.chav')

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
}

function home() {
    sec.classList.remove("reg")
    chave.classList.remove('chaveopen')
    menu.classList.remove("open")
}
function chav() {
    chave.classList.add('chaveopen')
    menu.classList.remove("open")
    sec.classList.remove('reg')
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
