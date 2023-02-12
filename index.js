var menu = document.querySelector('nav.nv')
var sec = document.querySelector('section.sec')
var chave = document.querySelector('section.chav')
var hd = document.querySelector("header.hd")
var back = document.querySelector("div.back")
var orgpage = document.querySelector("section.orgpage")
var tabela = document.querySelector('table.tabela')
var tabela2 = document.querySelector("section.tabela2")
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
    tabela.classList.add('htabela')
    tabela2.classList.add('htabela')
}

function home() {
    sec.classList.remove("reg")
    chave.classList.remove('chaveopen')
    menu.classList.remove("open")
    hd.classList.remove('orgopen')
    back.classList.remove("orgopen")
    orgpage.classList.remove("orgpageopen")
    tabela.classList.remove('htabela')
    tabela2.classList.remove('htabela')
}
function chav() {
    chave.classList.add('chaveopen')
    menu.classList.remove("open")
    sec.classList.remove('reg')
    hd.classList.remove('orgopen')
    back.classList.remove("orgopen")
    orgpage.classList.remove("orgpageopen")
    tabela.classList.add('htabela')
    tabela2.classList.add('htabela')
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

// Variáveis para as tabelas
var tabelaEditavel = document.querySelector('table#tabelaEditavel');
var tabelaNaoEditavel = document.querySelector('table#tabelaNaoEditavel');

// Adiciona event listener a cada célula da tabela editável
tabelaEditavel.addEventListener('input', (e) => {
    if (e.target.tagName === 'TD') {
        // Encontra a célula correspondente na tabela não editável e atualiza seu conteúdo
        var linha = e.target.parentNode;
        var celulaNaoEditavel = tabelaNaoEditavel.rows[linha.rowIndex].cells[e.target.cellIndex];
        celulaNaoEditavel.textContent = e.target.textContent;
    }
});

// Adiciona um botão para adicionar linhas dinamicamente
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

    // Adiciona uma nova linha à tabela não editável com o mesmo conteúdo
    var trNaoEditavel = document.createElement("tr");
    var td1NaoEditavel = document.createElement('td');
    var td2NaoEditavel = document.createElement("td");
    td1NaoEditavel.textContent = td1Editavel.textContent;
    td2NaoEditavel.textContent = td2Editavel.textContent;
    trNaoEditavel.appendChild(td1NaoEditavel);
    trNaoEditavel.appendChild(td2NaoEditavel);
    tabelaNaoEditavel.appendChild(trNaoEditavel);
    // Adiciona o botão de remoção
    var btnRemover = document.createElement("button");

    btnRemover.addEventListener('click', () => {
        trEditavel.remove();
        trNaoEditavel.remove();
    });
    btnRemover.classList.add('remove')
    trEditavel.appendChild(btnRemover);

});




// Função que cria uma nova linha na tabela editável e na tabela não editável
function criarNovaLinha() {
    const select = document.querySelector("select#option");
    const chavEditavel = document.querySelector('table#chavEditavel');
    const tabelaNaoEditavel = document.querySelector("table#chavNaoEditavel");
    const tr = document.createElement('tr');
    const trNaoEditavel = document.createElement('tr');
    const br = document.createElement('br')
    const broken = document.createElement('br')
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
    chavEditavel.appendChild(br)
    chavEditavel.appendChild(br)
    tabelaNaoEditavel.appendChild(broken)
}


// Event listener para o botão "Adicionar"
const addnew2 = document.querySelector('button.addnew2');
addnew2.addEventListener('click', criarNovaLinha);



// pagina do org
function org() {
    hd.classList.add('orgopen')
    sec.classList.remove('reg')
    menu.classList.remove("open")
    chave.classList.remove('chaveopen')
    back.classList.add("orgopen")
    orgpage.classList.remove("orgpageopen")
    tabela.classList.add('htabela')
    tabela2.classList.add('htabela')
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
    } else if (senha.value != '1') {
        alert('Email ou senha incorretos')
    }
    else {
        orgpage.classList.add("orgpageopen")
        email.value = ''
        senha.value = ''
    }
})
