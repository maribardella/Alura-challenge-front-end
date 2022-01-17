const todosOsProjetos = document.querySelector('.todos__projetos')

new function() {
    console.log("esta entrando nessa função")
    mostraProjetos()
}

function mostraProjetos() {
    if(sessionStorage.length == 0) {
        return
    }
    let projetos = []
    for(let i = 0; i < sessionStorage.length; i++) {
        projetos.push(JSON.parse(sessionStorage.getItem(i)))
    }
    projetos.forEach(projeto => {
        todosOsProjetos.innerHTML += montaCartao(projeto)
        const codigoHtml = todosOsProjetos.querySelector(`[data-id="${projeto.id}"]`)
        codigoHtml.querySelector('code').innerText = projeto.detalhesDoProjeto.codigo
    })
}

function montaCartao(projeto) {
    let cartao =`
        <a href="index.html" class="conteudo__projeto" data-id="${projeto.id}">
            <article class="projeto">
                <code class="projeto__codigo hljs ${projeto.detalhesDoProjeto.linguagem}"></code>
                <h2 class="projeto__titulo">${projeto.detalhesDoProjeto.nomeDoProjeto}</h2>
                <p class="projeto__descricao">${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>
                <span class="projeto__linguagem linguagem--${projeto.detalhesDoProjeto.linguagem}">${projeto.detalhesDoProjeto.linguagem}</span>
            </article>
        </a>
    `
    return cartao
}