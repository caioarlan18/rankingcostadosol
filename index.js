var menu = document.querySelector('nav.nv')
var sec = document.querySelector('section.sec')
var chave = document.querySelector('section.chav')
var chave2 = document.querySelector('section.chav2')
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
    chave2.classList.remove('chaveopen')
    desa.classList.add('htabela')
}

function home() {
    sec.classList.remove("reg")
    chave.classList.remove('chaveopen')
    menu.classList.remove("open")
    hd.classList.remove('orgopen')
    back.classList.remove("orgopen")
    orgpage.classList.remove("orgpageopen")
    chave2.classList.remove('chaveopen')
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
    chave2.classList.remove('chaveopen')
}
function chavB() {
    chave2.classList.add('chaveopen')
    chave.classList.remove('chaveopen')
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
    e11a.classList.remove('bl')
    e12a.classList.remove('bl')
    e13a.classList.remove('bl')
    e14a.classList.remove('bl')
    e15a.classList.remove('bl')
    e16a.classList.remove('bl')
    e17a.classList.remove('bl')
    e17a.classList.add('bl')
}
function e2a() {
    e11a.classList.remove('bl')
    e12a.classList.add('bl')
    e13a.classList.remove('bl')
    e14a.classList.remove('bl')
    e15a.classList.remove('bl')
    e16a.classList.remove('bl')
    e17a.classList.remove('bl')
}
function e3a() {
    e11a.classList.remove('bl')
    e12a.classList.remove('bl')
    e13a.classList.add('bl')
    e14a.classList.remove('bl')
    e15a.classList.remove('bl')
    e16a.classList.remove('bl')
    e17a.classList.remove('bl')
}
function e4a() {
    e11a.classList.remove('bl')
    e12a.classList.remove('bl')
    e13a.classList.remove('bl')
    e14a.classList.add('bl')
    e15a.classList.remove('bl')
    e16a.classList.remove('bl')
    e17a.classList.remove('bl')
}
function e5a() {
    e11a.classList.remove('bl')
    e12a.classList.remove('bl')
    e13a.classList.remove('bl')
    e14a.classList.remove('bl')
    e15a.classList.add('bl')
    e16a.classList.remove('bl')
    e17a.classList.remove('bl')
}
function e6a() {
    e11a.classList.remove('bl')
    e12a.classList.remove('bl')
    e13a.classList.remove('bl')
    e14a.classList.remove('bl')
    e15a.classList.remove('bl')
    e16a.classList.add('bl')
    e17a.classList.remove('bl')
}
function e7a() {
    e11a.classList.add('bl')
    e12a.classList.remove('bl')
    e13a.classList.remove('bl')
    e14a.classList.remove('bl')
    e15a.classList.remove('bl')
    e16a.classList.remove('bl')
    e17a.classList.remove('bl')
}


// B

const menuItems2 = document.querySelectorAll("ul.dropB li");

menuItems2.forEach(item => {
    item.addEventListener("click", function () {
        menuItems2.forEach(item => {
            item.classList.remove("active2");
        });
        this.classList.add("active2");
    });
});


var e11b = document.querySelector('div.tabela2')
var e12b = document.querySelector('div.tabela3')
var e13b = document.querySelector('div.tabela4')
var e14b = document.querySelector('div.tabela5')
var e15b = document.querySelector('div.tabela6')
var e16b = document.querySelector('div.tabela7')
var e17b = document.querySelector('div.tabela8')


function e1b() {
    e11b.classList.remove('blb')
    e12b.classList.remove('blb')
    e13b.classList.remove('blb')
    e14b.classList.remove('blb')
    e15b.classList.remove('blb')
    e16b.classList.remove('blb')
    e17b.classList.remove('blb')
    e17b.classList.add('blb')
}
function e2b() {
    e11b.classList.remove('blb')
    e12b.classList.add('blb')
    e13b.classList.remove('blb')
    e14b.classList.remove('blb')
    e15b.classList.remove('blb')
    e16b.classList.remove('blb')
    e17b.classList.remove('blb')
}
function e3b() {
    e11b.classList.remove('blb')
    e12b.classList.remove('blb')
    e13b.classList.add('blb')
    e14b.classList.remove('blb')
    e15b.classList.remove('blb')
    e16b.classList.remove('blb')
    e17b.classList.remove('blb')
}
function e4b() {
    e11b.classList.remove('blb')
    e12b.classList.remove('blb')
    e13b.classList.remove('blb')
    e14b.classList.add('blb')
    e15b.classList.remove('blb')
    e16b.classList.remove('blb')
    e17b.classList.remove('blb')
}
function e5b() {
    e11b.classList.remove('blb')
    e12b.classList.remove('blb')
    e13b.classList.remove('blb')
    e14b.classList.remove('blb')
    e15b.classList.add('blb')
    e16b.classList.remove('blb')
    e17b.classList.remove('blb')
}
function e6b() {
    e11b.classList.remove('blb')
    e12b.classList.remove('blb')
    e13b.classList.remove('blb')
    e14b.classList.remove('blb')
    e15b.classList.remove('blb')
    e16b.classList.add('blb')
    e17b.classList.remove('blb')
}
function e7b() {
    e11b.classList.add('blb')
    e12b.classList.remove('blb')
    e13b.classList.remove('blb')
    e14b.classList.remove('blb')
    e15b.classList.remove('blb')
    e16b.classList.remove('blb')
    e17b.classList.remove('blb')
}

// checkbox




// chave A
var jogadores = [];

function adicionarJogador() {
    var jogadorInput = document.getElementById("jogador");
    var jogador = jogadorInput.value.trim();
    if (jogador !== "") {
        jogadores.push(jogador);
        jogadorInput.value = "";
        renderizarJogadores();
        jogadorInput.focus()
    } else {
        alert('Preencha o campo')
    }

}

function renderizarJogadores() {
    var jogadoresList = document.getElementById("jogadores");
    jogadoresList.innerHTML = "";

    for (var i = 0; i < jogadores.length; i++) {
        var jogador = document.createElement("li");
        jogador.classList.add('listyle')
        jogador.setAttribute("id", "jogador-" + (i + 1));
        var jogadorNome = document.createElement("span");
        jogadorNome.innerHTML = jogadores[i];
        var removerBotao = document.createElement("button");
        removerBotao.classList.add('removebtn')
        removerBotao.setAttribute("onclick", "removerJogador(" + (i + 1) + ")");
        removerBotao.innerHTML = "Remover";
        jogador.appendChild(jogadorNome);
        jogador.appendChild(removerBotao);
        jogadoresList.appendChild(jogador);
    }
}

function removerJogador(id) {
    jogadores.splice(id - 1, 1);
    renderizarJogadores();
}

function criarTabela() {
    var jogadores_por_chave = document.getElementById("jogadores_por_chave").value;
    var num_jogadores = jogadores.length;
    var num_chaves = Math.ceil(num_jogadores / jogadores_por_chave);

    // Randomiza a lista de jogadores
    jogadores.sort(function () { return Math.random() - 0.5; });

    var tabela = document.getElementById("chavEditavel");
    var jogadoresList = document.getElementById("jogadores");

    if (jogadores_por_chave !== '') {
        for (var i = 0; i < num_jogadores; i++) {
            var jogador = document.createElement("li");
            jogador.classList.add('listyle')
            jogador.setAttribute("id", "jogador-" + (i + 1));
            var jogadorNome = document.createElement("span");
            jogadorNome.innerHTML = jogadores[i];
            var removerBotao = document.createElement("button");
            removerBotao.classList.add('removebtn')
            removerBotao.setAttribute("onclick", "removerJogador(" + (i + 1) + ")");
            removerBotao.innerHTML = "Remover";
            jogador.appendChild(jogadorNome);
            jogador.appendChild(removerBotao);
            jogadoresList.appendChild(jogador);
        }

        for (var i = 0; i < num_chaves; i++) {
            var row = tabela.insertRow();
            var cell1 = row.insertCell(0);
            cell1.innerHTML = "Chave " + (i + 1);
            var cell2 = row.insertCell(1);
            var tabelaJogadores = document.createElement("table");
            tabelaJogadores.contentEditable = true
            tabelaJogadores.setAttribute("id", "tabela-jogadores-" + (i + 1));
            cell2.appendChild(tabelaJogadores);
            var jogadoresChave = jogadores.slice(i * jogadores_por_chave, (i + 1) * jogadores_por_chave);
            for (var j = 0; j < jogadoresChave.length; j++) {
                var row = tabelaJogadores.insertRow();
                var cell1 = row.insertCell(0);
                cell1.innerHTML = (i * jogadores_por_chave + j + 1) + ".";
                var cell2 = row.insertCell(1);
                cell2.innerHTML = jogadoresChave[j];
            }

        }
        jogadores = []
        jogadoresList.innerHTML = "";

    } else if (jogadores_por_chave == '') {
        alert("Preencha o campo 'Jogadores por chave'")
    } else {
        alert('erro')
    }



}
function removerTodosJogadores() {
    var tabela = document.getElementById("chavEditavel");
    var num_chaves = tabela.rows.length - 1; // subtrai 1 para ignorar a linha do cabeçalho

    for (var i = num_chaves; i >= 1; i--) {
        tabela.deleteRow(i);
    }
}

// chave B

var jogadores2 = [];

function adicionarJogador2() {
    var jogadorInput2 = document.getElementById("jogador2");
    var jogador2 = jogadorInput2.value.trim();
    if (jogador2 !== "") {
        jogadores2.push(jogador2);
        jogadorInput2.value = "";
        renderizarJogadores2();
        jogadorInput2.focus()
    } else {
        alert('Preencha o campo')
    }

}

function renderizarJogadores2() {
    var jogadoresList2 = document.getElementById("jogadores2");
    jogadoresList2.innerHTML = "";

    for (var i = 0; i < jogadores2.length; i++) {
        var jogador2 = document.createElement("li");
        jogador2.classList.add('listyle')
        jogador2.setAttribute("id", "jogador-" + (i + 1));
        var jogadorNome2 = document.createElement("span");
        jogadorNome2.innerHTML = jogadores2[i];
        var removerBotao2 = document.createElement("button");
        removerBotao2.classList.add('removebtn')
        removerBotao2.setAttribute("onclick", "removerJogador(" + (i + 1) + ")");
        removerBotao2.innerHTML = "Remover";
        jogador2.appendChild(jogadorNome2);
        jogador2.appendChild(removerBotao2);
        jogadoresList2.appendChild(jogador2);
    }
}

function removerJogador2(id) {
    jogadores2.splice(id - 1, 1);
    renderizarJogadores2();
}

function criarTabela2() {
    var jogadores_por_chave2 = document.getElementById("jogadores_por_chave2").value;
    var num_jogadores2 = jogadores2.length;
    var num_chaves2 = Math.ceil(num_jogadores2 / jogadores_por_chave2);

    // Randomiza a lista de jogadores
    jogadores2.sort(function () { return Math.random() - 0.5; });

    var tabela2 = document.getElementById("chavEditavel2");
    var jogadoresList2 = document.getElementById("jogadores2");

    if (jogadores_por_chave2 !== '') {
        for (var i = 0; i < num_jogadores2; i++) {
            var jogador2 = document.createElement("li");
            jogador2.classList.add('listyle')
            jogador2.setAttribute("id", "jogador-" + (i + 1));
            var jogadorNome2 = document.createElement("span");
            jogadorNome2.innerHTML = jogadores2[i];
            var removerBotao2 = document.createElement("button");
            removerBotao2.classList.add('removebtn')
            removerBotao2.setAttribute("onclick", "removerJogador(" + (i + 1) + ")");
            removerBotao2.innerHTML = "Remover";
            jogador2.appendChild(jogadorNome2);
            jogador2.appendChild(removerBotao2);
            jogadoresList2.appendChild(jogador2);
        }

        for (var i = 0; i < num_chaves2; i++) {
            var row2 = tabela2.insertRow();
            var cell2 = row2.insertCell(0);
            cell2.innerHTML = "Chave " + (i + 1);
            var cell2 = row2.insertCell(1);
            var tabelaJogadores2 = document.createElement("table");
            tabelaJogadores2.contentEditable = true
            tabelaJogadores2.setAttribute("id", "tabela-jogadores-" + (i + 1));
            cell2.appendChild(tabelaJogadores2);
            var jogadoresChave2 = jogadores2.slice(i * jogadores_por_chave2, (i + 1) * jogadores_por_chave2);
            for (var j = 0; j < jogadoresChave2.length; j++) {
                var row2 = tabelaJogadores2.insertRow();
                var cell2 = row2.insertCell(0);
                cell2.innerHTML = (i * jogadores_por_chave2 + j + 1) + ".";
                var cell3 = row2.insertCell(1);
                cell3.innerHTML = jogadoresChave2[j];
            }

        }
        jogadores2 = []
        jogadoresList2.innerHTML = "";

    } else if (jogadores_por_chave2 == '') {
        alert("Preencha o campo 'Jogadores por chave'")
    } else {
        alert('erro')
    }



}
function removerTodosJogadores2() {
    var tabela2 = document.getElementById("chavEditavel2");
    var num_chaves2 = tabela2.rows.length - 1; // subtrai 1 para ignorar a linha do cabeçalho

    for (var i = num_chaves2; i >= 1; i--) {
        tabela2.deleteRow(i);
    }
}


// oitavas A
var tabelaEditavel10 = document.querySelector('table#tabelaEditavel10');
var tabelaNaoEditavel10 = document.querySelector('table#tabelaNaoEditavel10');
tabelaEditavel.addEventListener('input', (e) => {
    if (e.target.tagName === 'TD') {
        var linha = e.target.parentNode;
        var celulaNaoEditavel10 = tabelaNaoEditavel10.rows[linha.rowIndex].cells[e.target.cellIndex];
        celulaNaoEditavel10.textContent = e.target.textContent;
    }
});
var addnew10 = document.querySelector("button.addnew10");
addnew10.addEventListener('click', () => {
    var trEditavel10 = document.createElement("tr");
    var td1Editavel10 = document.createElement('td');
    var td2Editavel10 = document.createElement("td");
    td1Editavel10.contentEditable = true;
    td2Editavel10.contentEditable = true;
    trEditavel10.appendChild(td1Editavel10);
    trEditavel10.appendChild(td2Editavel10);
    tabelaEditavel10.appendChild(trEditavel10);


    var trNaoEditavel10 = document.createElement("tr");
    var td1NaoEditavel10 = document.createElement('td');
    var td2NaoEditavel10 = document.createElement("td");
    td1NaoEditavel10.textContent = td1Editavel10.textContent;
    td2NaoEditavel10.textContent = td2Editavel10.textContent;
    trNaoEditavel10.appendChild(td1NaoEditavel10);
    trNaoEditavel10.appendChild(td2NaoEditavel10);
    tabelaNaoEditavel10.appendChild(trNaoEditavel10);

    var btnRemover10 = document.createElement("button");
    btnRemover10.addEventListener('click', () => {
        trEditavel10.remove();
        trNaoEditavel10.remove();
    });
    btnRemover10.classList.add('remove')
    trEditavel10.appendChild(btnRemover10);

});
// quartas A

var tabelaEditavel11 = document.querySelector('table#tabelaEditavel11');
var tabelaNaoEditavel11 = document.querySelector('table#tabelaNaoEditavel11');
tabelaEditavel11.addEventListener('input', (e) => {
    if (e.target.tagName === 'TD') {
        var linha = e.target.parentNode;
        var celulaNaoEditavel11 = tabelaNaoEditavel11.rows[linha.rowIndex].cells[e.target.cellIndex];
        celulaNaoEditavel11.textContent = e.target.textContent;
    }
});



var addnew11 = document.querySelector("button.addnew11");
addnew11.addEventListener('click', () => {
    var trEditavel11 = document.createElement("tr");
    var td1Editavel11 = document.createElement('td');
    var td2Editavel11 = document.createElement("td");
    td1Editavel11.contentEditable = true;
    td2Editavel11.contentEditable = true;
    trEditavel11.appendChild(td1Editavel11);
    trEditavel11.appendChild(td2Editavel11);
    tabelaEditavel11.appendChild(trEditavel11);


    var trNaoEditavel11 = document.createElement("tr");
    var td1NaoEditavel11 = document.createElement('td');
    var td2NaoEditavel11 = document.createElement("td");
    td1NaoEditavel11.textContent = td1Editavel11.textContent;
    td2NaoEditavel11.textContent = td2Editavel11.textContent;
    trNaoEditavel11.appendChild(td1NaoEditavel11);
    trNaoEditavel11.appendChild(td2NaoEditavel11);
    tabelaNaoEditavel11.appendChild(trNaoEditavel11);

    var btnRemover11 = document.createElement("button");
    btnRemover11.addEventListener('click', () => {
        trEditavel11.remove();
        trNaoEditavel11.remove();
    });
    btnRemover11.classList.add('remove')
    trEditavel11.appendChild(btnRemover11);

});

// semifinal A

var tabelaEditavel12 = document.querySelector('table#tabelaEditavel12');
var tabelaNaoEditavel12 = document.querySelector('table#tabelaNaoEditavel12');
tabelaEditavel12.addEventListener('input', (e) => {
    if (e.target.tagName === 'TD') {
        var linha = e.target.parentNode;
        var celulaNaoEditavel12 = tabelaNaoEditavel12.rows[linha.rowIndex].cells[e.target.cellIndex];
        celulaNaoEditavel12.textContent = e.target.textContent;
    }
});



var addnew12 = document.querySelector("button.addnew12");
addnew12.addEventListener('click', () => {
    var trEditavel12 = document.createElement("tr");
    var td1Editavel12 = document.createElement('td');
    var td2Editavel12 = document.createElement("td");
    td1Editavel12.contentEditable = true;
    td2Editavel12.contentEditable = true;
    trEditavel12.appendChild(td1Editavel12);
    trEditavel12.appendChild(td2Editavel12);
    tabelaEditavel12.appendChild(trEditavel12);


    var trNaoEditavel12 = document.createElement("tr");
    var td1NaoEditavel12 = document.createElement('td');
    var td2NaoEditavel12 = document.createElement("td");
    td1NaoEditavel12.textContent = td1Editavel12.textContent;
    td2NaoEditavel12.textContent = td2Editavel12.textContent;
    trNaoEditavel12.appendChild(td1NaoEditavel12);
    trNaoEditavel12.appendChild(td2NaoEditavel12);
    tabelaNaoEditavel12.appendChild(trNaoEditavel12);

    var btnRemover12 = document.createElement("button");
    btnRemover12.addEventListener('click', () => {
        trEditavel12.remove();
        trNaoEditavel12.remove();
    });
    btnRemover12.classList.add('remove')
    trEditavel12.appendChild(btnRemover12);

});


// final A

var tabelaEditavel13 = document.querySelector('table#tabelaEditavel13');
var tabelaNaoEditavel13 = document.querySelector('table#tabelaNaoEditavel13');
tabelaEditavel13.addEventListener('input', (e) => {
    if (e.target.tagName === 'TD') {
        var linha = e.target.parentNode;
        var celulaNaoEditavel13 = tabelaNaoEditavel13.rows[linha.rowIndex].cells[e.target.cellIndex];
        celulaNaoEditavel13.textContent = e.target.textContent;
    }
});

var addnew13 = document.querySelector("button.addnew13");
addnew13.addEventListener('click', () => {
    var trEditavel13 = document.createElement("tr");
    var td1Editavel13 = document.createElement('td');
    var td2Editavel13 = document.createElement("td");
    td1Editavel13.contentEditable = true;
    td2Editavel13.contentEditable = true;
    trEditavel13.appendChild(td1Editavel13);
    trEditavel13.appendChild(td2Editavel13);
    tabelaEditavel13.appendChild(trEditavel13);


    var trNaoEditavel13 = document.createElement("tr");
    var td1NaoEditavel13 = document.createElement('td');
    var td2NaoEditavel13 = document.createElement("td");
    td1NaoEditavel13.textContent = td1Editavel13.textContent;
    td2NaoEditavel13.textContent = td2Editavel13.textContent;
    trNaoEditavel13.appendChild(td1NaoEditavel13);
    trNaoEditavel13.appendChild(td2NaoEditavel13);
    tabelaNaoEditavel13.appendChild(trNaoEditavel13);

    var btnRemover13 = document.createElement("button");
    btnRemover13.addEventListener('click', () => {
        trEditavel13.remove();
        trNaoEditavel13.remove();
    });
    btnRemover13.classList.add('remove')
    trEditavel13.appendChild(btnRemover13);

});


function subchavv() {
    event.preventDefault()
    var subglob = document.querySelector('div.subglob')
    subglob.classList.toggle('subglobopen')
}


//oitavas B

var tabelaEditavel20 = document.querySelector('table#tabelaEditavel20');
var tabelaNaoEditavel20 = document.querySelector('table#tabelaNaoEditavel20');
tabelaEditavel20.addEventListener('input', (e) => {
    if (e.target.tagName === 'TD') {
        var linha = e.target.parentNode;
        var celulaNaoEditavel20 = tabelaNaoEditavel20.rows[linha.rowIndex].cells[e.target.cellIndex];
        celulaNaoEditavel20.textContent = e.target.textContent;
    }
});

var addnew20 = document.querySelector("button.addnew20");
addnew20.addEventListener('click', () => {
    var trEditavel20 = document.createElement("tr");
    var td1Editavel20 = document.createElement('td');
    var td2Editavel20 = document.createElement("td");
    td1Editavel20.contentEditable = true;
    td2Editavel20.contentEditable = true;
    trEditavel20.appendChild(td1Editavel20);
    trEditavel20.appendChild(td2Editavel20);
    tabelaEditavel20.appendChild(trEditavel20);


    var trNaoEditavel20 = document.createElement("tr");
    var td1NaoEditavel20 = document.createElement('td');
    var td2NaoEditavel20 = document.createElement("td");
    td1NaoEditavel20.textContent = td1Editavel20.textContent;
    td2NaoEditavel20.textContent = td2Editavel20.textContent;
    trNaoEditavel20.appendChild(td1NaoEditavel20);
    trNaoEditavel20.appendChild(td2NaoEditavel20);
    tabelaNaoEditavel20.appendChild(trNaoEditavel20);

    var btnRemover20 = document.createElement("button");
    btnRemover20.addEventListener('click', () => {
        trEditavel20.remove();
        trNaoEditavel20.remove();
    });
    btnRemover20.classList.add('remove')
    trEditavel20.appendChild(btnRemover20);

});

// quartas B

var tabelaEditavel21 = document.querySelector('table#tabelaEditavel21');
var tabelaNaoEditavel21 = document.querySelector('table#tabelaNaoEditavel21');
tabelaEditavel20.addEventListener('input', (e) => {
    if (e.target.tagName === 'TD') {
        var linha = e.target.parentNode;
        var celulaNaoEditavel21 = tabelaNaoEditavel21.rows[linha.rowIndex].cells[e.target.cellIndex];
        celulaNaoEditavel21.textContent = e.target.textContent;
    }
});

var addnew21 = document.querySelector("button.addnew21");
addnew21.addEventListener('click', () => {
    var trEditavel21 = document.createElement("tr");
    var td1Editavel21 = document.createElement('td');
    var td2Editavel21 = document.createElement("td");
    td1Editavel21.contentEditable = true;
    td2Editavel21.contentEditable = true;
    trEditavel21.appendChild(td1Editavel21);
    trEditavel21.appendChild(td2Editavel21);
    tabelaEditavel21.appendChild(trEditavel21);


    var trNaoEditavel21 = document.createElement("tr");
    var td1NaoEditavel21 = document.createElement('td');
    var td2NaoEditavel21 = document.createElement("td");
    td1NaoEditavel21.textContent = td1Editavel21.textContent;
    td2NaoEditavel21.textContent = td2Editavel21.textContent;
    trNaoEditavel21.appendChild(td1NaoEditavel21);
    trNaoEditavel21.appendChild(td2NaoEditavel21);
    tabelaNaoEditavel21.appendChild(trNaoEditavel21);

    var btnRemover21 = document.createElement("button");
    btnRemover21.addEventListener('click', () => {
        trEditavel21.remove();
        trNaoEditavel21.remove();
    });
    btnRemover21.classList.add('remove')
    trEditavel21.appendChild(btnRemover21);

});

// semifinal B

var tabelaEditavel22 = document.querySelector('table#tabelaEditavel22');
var tabelaNaoEditavel22 = document.querySelector('table#tabelaNaoEditavel22');
tabelaEditavel22.addEventListener('input', (e) => {
    if (e.target.tagName === 'TD') {
        var linha = e.target.parentNode;
        var celulaNaoEditavel22 = tabelaNaoEditavel22.rows[linha.rowIndex].cells[e.target.cellIndex];
        celulaNaoEditavel22.textContent = e.target.textContent;
    }
});

var addnew22 = document.querySelector("button.addnew22");
addnew22.addEventListener('click', () => {
    var trEditavel22 = document.createElement("tr");
    var td1Editavel22 = document.createElement('td');
    var td2Editavel22 = document.createElement("td");
    td1Editavel22.contentEditable = true;
    td2Editavel22.contentEditable = true;
    trEditavel22.appendChild(td1Editavel22);
    trEditavel22.appendChild(td2Editavel22);
    tabelaEditavel22.appendChild(trEditavel22);


    var trNaoEditavel22 = document.createElement("tr");
    var td1NaoEditavel22 = document.createElement('td');
    var td2NaoEditavel22 = document.createElement("td");
    td1NaoEditavel22.textContent = td1Editavel22.textContent;
    td2NaoEditavel22.textContent = td2Editavel22.textContent;
    trNaoEditavel22.appendChild(td1NaoEditavel22);
    trNaoEditavel22.appendChild(td2NaoEditavel22);
    tabelaNaoEditavel22.appendChild(trNaoEditavel22);

    var btnRemover22 = document.createElement("button");
    btnRemover22.addEventListener('click', () => {
        trEditavel22.remove();
        trNaoEditavel22.remove();
    });
    btnRemover22.classList.add('remove')
    trEditavel22.appendChild(btnRemover22);

});


//final B

var tabelaEditavel23 = document.querySelector('table#tabelaEditavel23');
var tabelaNaoEditavel23 = document.querySelector('table#tabelaNaoEditavel23');
tabelaEditavel23.addEventListener('input', (e) => {
    if (e.target.tagName === 'TD') {
        var linha = e.target.parentNode;
        var celulaNaoEditavel23 = tabelaNaoEditavel23.rows[linha.rowIndex].cells[e.target.cellIndex];
        celulaNaoEditavel23.textContent = e.target.textContent;
    }
});

var addnew23 = document.querySelector("button.addnew23");
addnew23.addEventListener('click', () => {
    var trEditavel23 = document.createElement("tr");
    var td1Editavel23 = document.createElement('td');
    var td2Editavel23 = document.createElement("td");
    td1Editavel23.contentEditable = true;
    td2Editavel23.contentEditable = true;
    trEditavel23.appendChild(td1Editavel23);
    trEditavel23.appendChild(td2Editavel23);
    tabelaEditavel23.appendChild(trEditavel23);


    var trNaoEditavel23 = document.createElement("tr");
    var td1NaoEditavel23 = document.createElement('td');
    var td2NaoEditavel23 = document.createElement("td");
    td1NaoEditavel23.textContent = td1Editavel23.textContent;
    td2NaoEditavel23.textContent = td2Editavel23.textContent;
    trNaoEditavel23.appendChild(td1NaoEditavel23);
    trNaoEditavel23.appendChild(td2NaoEditavel23);
    tabelaNaoEditavel23.appendChild(trNaoEditavel23);

    var btnRemover23 = document.createElement("button");
    btnRemover23.addEventListener('click', () => {
        trEditavel23.remove();
        trNaoEditavel23.remove();
    });
    btnRemover23.classList.add('remove')
    trEditavel23.appendChild(btnRemover23);

});
