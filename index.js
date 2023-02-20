var menu = document.querySelector('nav.nv')
var sec = document.querySelector('section.sec')
var chave = document.querySelector('section.chav')
var hd = document.querySelector("header.hd")
var back = document.querySelector("div.back")
var orgpage = document.querySelector("section.orgpage")
var tabela = document.querySelector('table.tabela')
var tabela2 = document.querySelector("section.tabela2")
var tabela1 = document.querySelector('table.tabela1')
var desa = document.querySelector("div.desa")
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

    desa.classList.add('htabela')
}

function home() {
    sec.classList.remove("reg")
    chave.classList.remove('chaveopen')
    menu.classList.remove("open")
    hd.classList.remove('orgopen')
    back.classList.remove("orgopen")
    orgpage.classList.remove("orgpageopen")

    desa.classList.remove('htabela')
}
function chav() {
    chave.classList.add('chaveopen')
    menu.classList.remove("open")
    sec.classList.remove('reg')
    hd.classList.remove('orgopen')
    back.classList.remove("orgopen")
    orgpage.classList.remove("orgpageopen")
    desa.classList.add('htabela')
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

// pontuação categoria A

var tabelaEditavel = document.querySelector('table#tabelaEditavel');
var tabelaNaoEditavel = document.querySelector('table#tabelaNaoEditavel');
tabelaEditavel.addEventListener('input', (e) => {
    if (e.target.tagName === 'TD') {
        var linha = e.target.parentNode;
        var celulaNaoEditavel = tabelaNaoEditavel.rows[linha.rowIndex].cells[e.target.cellIndex];
        celulaNaoEditavel.textContent = e.target.textContent;
    }
});
var teste = [{
    chave: 'chave1',
    pont: 'pont.value',
    created: ''
}]


var addnew = document.querySelector("button.addnew");
addnew.addEventListener('click', () => {
    var trEditavel = document.createElement("tr");
    var td1Editavel = document.createElement('td');
    var td2Editavel = document.createElement("td");
    td1Editavel.contentEditable = true;
    td2Editavel.contentEditable = true;
    trEditavel.appendChild(td1Editavel);
    trEditavel.appendChild(td2Editavel);
    tabelaEditavel.appendChild(trEditavel);


    var trNaoEditavel = document.createElement("tr");
    var td1NaoEditavel = document.createElement('td');
    var td2NaoEditavel = document.createElement("td");
    td1NaoEditavel.textContent = td1Editavel.textContent;
    td2NaoEditavel.textContent = td2Editavel.textContent;
    trNaoEditavel.appendChild(td1NaoEditavel);
    trNaoEditavel.appendChild(td2NaoEditavel);
    tabelaNaoEditavel.appendChild(trNaoEditavel);

    var btnRemover = document.createElement("button");
    btnRemover.addEventListener('click', () => {
        trEditavel.remove();
        trNaoEditavel.remove();
    });
    btnRemover.classList.add('remove')
    trEditavel.appendChild(btnRemover);

});





// pontuaçao categoria B
var tabelaEditavel2 = document.querySelector('table#tabelaEditavel2');
var tabelaNaoEditavel2 = document.querySelector('table#tabelaNaoEditavel2');
tabelaEditavel2.addEventListener('input', (e) => {
    if (e.target.tagName === 'TD') {
        var linha = e.target.parentNode;
        var celulaNaoEditavel2 = tabelaNaoEditavel2.rows[linha.rowIndex].cells[e.target.cellIndex];
        celulaNaoEditavel2.textContent = e.target.textContent;
    }
});
var addnewb = document.querySelector("button.addnewb");
addnewb.addEventListener('click', () => {
    var trEditavel2 = document.createElement("tr");
    var td1Editavel2 = document.createElement('td');
    var td2Editavel2 = document.createElement("td");
    td1Editavel2.contentEditable = true;
    td2Editavel2.contentEditable = true;
    trEditavel2.appendChild(td1Editavel2);
    trEditavel2.appendChild(td2Editavel2);
    tabelaEditavel2.appendChild(trEditavel2);


    var trNaoEditavel2 = document.createElement("tr");
    var td1NaoEditavel2 = document.createElement('td');
    var td2NaoEditavel2 = document.createElement("td");
    td1NaoEditavel2.textContent = td1Editavel2.textContent;
    td2NaoEditavel2.textContent = td2Editavel2.textContent;
    trNaoEditavel2.appendChild(td1NaoEditavel2);
    trNaoEditavel2.appendChild(td2NaoEditavel2);
    tabelaNaoEditavel2.appendChild(trNaoEditavel2);

    var btnRemover = document.createElement("button");
    btnRemover.addEventListener('click', () => {
        trEditavel2.remove();
        trNaoEditavel2.remove();
    });
    btnRemover.classList.add('remove')
    trEditavel2.appendChild(btnRemover);

});



// chave categoria A

function criarNovaLinha() {
    const select = document.querySelector("select#option");
    const chavEditavel = document.querySelector('table#chavEditavel');
    const tabelaNaoEditavel = document.querySelector("table#chavNaoEditavel");
    const tr = document.createElement('tr');
    const trNaoEditavel = document.createElement('tr');
    for (let i = 0; i < select.value; i++) {
        const td = document.createElement('td');
        td.contentEditable = true;
        td.addEventListener('input', (event) => {
            const index = Array.from(tr.children).indexOf(event.target);
            trNaoEditavel.children[index].textContent = event.target.textContent;
        });

        tr.appendChild(td);


        const tdNaoEditavel = document.createElement('td');
        tdNaoEditavel.textContent = td.textContent;
        trNaoEditavel.appendChild(tdNaoEditavel);
    }

    chavEditavel.appendChild(tr);
    tabelaNaoEditavel.appendChild(trNaoEditavel);


    let linhasAdicionadas = [];
    linhasAdicionadas.push(tr);
    linhasAdicionadas.push(trNaoEditavel);
    const excluirTudo = document.querySelector("button.excluirtudo")
    excluirTudo.addEventListener('click', () => {

        for (let i = 0; i < linhasAdicionadas.length; i++) {
            linhasAdicionadas[i].remove();
        }

        linhasAdicionadas = [];
    });
}
const addnew2 = document.querySelector('button.addnew2');
addnew2.addEventListener('click', criarNovaLinha);



// chave categoria B
function criarNovaLinha1() {
    const select = document.querySelector("select#option1");
    const chavEditavel = document.querySelector('table#chavEditavel2');
    const tabelaNaoEditavel = document.querySelector("table#chavNaoEditavel2");
    const tr = document.createElement('tr');
    const trNaoEditavel = document.createElement('tr');
    for (let i = 0; i < select.value; i++) {
        const td = document.createElement('td');
        td.contentEditable = true;
        td.addEventListener('input', (event) => {
            const index = Array.from(tr.children).indexOf(event.target);
            trNaoEditavel.children[index].textContent = event.target.textContent;
        });

        tr.appendChild(td);


        const tdNaoEditavel = document.createElement('td');
        tdNaoEditavel.textContent = td.textContent;
        trNaoEditavel.appendChild(tdNaoEditavel);
    }

    chavEditavel.appendChild(tr);
    tabelaNaoEditavel.appendChild(trNaoEditavel);
    let linhasAdicionadas = [];
    linhasAdicionadas.push(tr);
    linhasAdicionadas.push(trNaoEditavel);
    const excluirTudo = document.querySelector("button.excluirtudo2")
    excluirTudo.addEventListener('click', () => {
        // Remove apenas as linhas adicionadas pelo botão "Adicionar"
        for (let i = 0; i < linhasAdicionadas.length; i++) {
            linhasAdicionadas[i].remove();
        }
        // Limpa a lista de linhas adicionadas
        linhasAdicionadas = [];
    });
}
const addnew3 = document.querySelector('button.addnew3');
addnew3.addEventListener('click', criarNovaLinha1);


// pagina do org
function org() {
    hd.classList.add('orgopen')
    sec.classList.remove('reg')
    menu.classList.remove("open")
    chave.classList.remove('chaveopen')
    back.classList.add("orgopen")
    orgpage.classList.remove("orgpageopen")
    desa.classList.add('htabela')
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
    else if (email.value != '1') {
        alert('Email ou senha incorretos')
        email.value = ''
        senha.value = ''
    } else if (senha.value != '1') {
        alert('Email ou senha incorretos')
        email.value = ''
        senha.value = ''
    }
    else {
        orgpage.classList.add("orgpageopen")
        email.value = ''
        senha.value = ''
    }
})

const menuItems = document.querySelectorAll("ul.dropA li");

menuItems.forEach(item => {
    item.addEventListener("click", function () {
        menuItems.forEach(item => {
            item.classList.remove("active");
        });
        this.classList.add("active");
    });
});

var e11a = document.querySelector('div.tabela-1')
var e12a = document.querySelector('div.tabela-2')
var e13a = document.querySelector('div.tabela-3')
var e14a = document.querySelector('div.tabela-4')
var e15a = document.querySelector('div.tabela-5')
var e16a = document.querySelector('div.tabela-6')
var e17a = document.querySelector('div.tabela-7')


function e1a() {
    e11a.classList.remove('eea')
    e12a.classList.remove('bl')
    e13a.classList.remove('bl')
    e14a.classList.remove('bl')
    e15a.classList.remove('bl')
    e16a.classList.remove('bl')
    e17a.classList.remove('bl')
}
function e2a() {
    e11a.classList.add('eea')
    e12a.classList.add('bl')
    e13a.classList.remove('bl')
    e14a.classList.remove('bl')
    e15a.classList.remove('bl')
    e16a.classList.remove('bl')
    e17a.classList.remove('bl')
}
function e3a() {
    e11a.classList.add('eea')
    e12a.classList.remove('bl')
    e13a.classList.add('bl')
    e14a.classList.remove('bl')
    e15a.classList.remove('bl')
    e16a.classList.remove('bl')
    e17a.classList.remove('bl')
}
function e4a() {
    e11a.classList.add('eea')
    e12a.classList.remove('bl')
    e13a.classList.remove('bl')
    e14a.classList.add('bl')
    e15a.classList.remove('bl')
    e16a.classList.remove('bl')
    e17a.classList.remove('bl')
}
function e5a() {
    e11a.classList.add('eea')
    e12a.classList.remove('bl')
    e13a.classList.remove('bl')
    e14a.classList.remove('bl')
    e15a.classList.add('bl')
    e16a.classList.remove('bl')
    e17a.classList.remove('bl')
}
function e6a() {
    e11a.classList.add('eea')
    e12a.classList.remove('bl')
    e13a.classList.remove('bl')
    e14a.classList.remove('bl')
    e15a.classList.remove('bl')
    e16a.classList.add('bl')
    e17a.classList.remove('bl')
}
function e7a() {
    e11a.classList.add('eea')
    e12a.classList.remove('bl')
    e13a.classList.remove('bl')
    e14a.classList.remove('bl')
    e15a.classList.remove('bl')
    e16a.classList.remove('bl')
    e17a.classList.add('bl')
}
