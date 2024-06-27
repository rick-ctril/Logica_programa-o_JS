// Captura evento de submit do form
const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento previnido.')
});

function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg;
}