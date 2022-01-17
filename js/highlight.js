const linguagem = document.querySelector('.linguagens');
const areaDoEditor = document.querySelector('.codigo__escrito');
const botao = document.querySelector('.botao__highlight');

function aplicarHighlight() {
    const codigo = areaDoEditor.innerText;
    areaDoEditor.innerHTML = `<code class = "codigo__escrito hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`;
    areaDoEditor.querySelector('code').textContent = codigo;
    hljs.highlightElement(areaDoEditor.querySelector('code'));
};

botao.addEventListener('click', () => {
    aplicarHighlight();
});