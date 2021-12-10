const botaoPesquisar = document.querySelector(".label_pesquisa");
const barraPesquisa = document.querySelector(".barra_pesquisa");
const logoAlura = document.querySelector(".logo");
const perfilLogado = document.querySelector(".perfil");
const divPesquisar = document.querySelector(".pesquisar");
const botaoFechar = document.querySelector(".botao_fechar");

    botaoPesquisar.addEventListener("click", () => {
        barraPesquisa.style.display = "flex";
        botaoPesquisar.style.display = "none";
        logoAlura.style.display = "none";
        perfilLogado.style.display = "none";
        divPesquisar.style.width = "85%";
        botaoFechar.style.display = "block";
    });

    botaoFechar.addEventListener("click", () =>{
        barraPesquisa.style.display = "none";
        botaoFechar.style.display = "none";
        botaoPesquisar.style.display = "flex";
        logoAlura.style.display = "flex";
        perfilLogado.style.display = "flex";
        divPesquisar.style.width = "70%";
    });