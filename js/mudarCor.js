const borda = document.querySelector('.area__codigo');
const cor = document.querySelector('.escolha__cor');

function mudarCorBorda() {
    borda.style.background = cor.value;
}