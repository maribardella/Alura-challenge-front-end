const botaoSalvar = document.querySelector('.botao__salvar')
const tituloProjeto = document.querySelector('.nome_proj')
const descricaoProjeto = document.querySelector('.descricao')
const linguagens = document.querySelector('.linguagens')
const areaDoCodigo = document.querySelector('.editor__codigo')

botaoSalvar.addEventListener('click', () => {
    if(typeof(Storage) !== "undefined"){
        console.log(areaDoCodigo)
        const projeto = montaProjeto()
        salvaLocalStorage(projeto)
        console.log(projeto)
    }else{
        console.log("não suporta o localstorage")
    }
})

function montaProjeto() {
    let projeto = {
        'id': sessionStorage.length,
        'detalhesDoProjeto': {
            'nomeDoProjeto': tituloProjeto.value,
            'descricaoDoProjeto': descricaoProjeto.value,
            'linguagem': linguagens.value,
            'codigo': areaDoCodigo.querySelector('code').innerText
        }
    }
    return projeto
}

function salvaLocalStorage(objetoJson){
    sessionStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}