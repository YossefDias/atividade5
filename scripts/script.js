const body = document.body;
const nav = body.firstElementChild.nextElementSibling;

function manipularEventos() {
    const botao = document.querySelector("#eventoBotao");
    const paragrafo = document.querySelector("#eventoSubtitulo");

    function handleClick() {
        alert("Botão clicado!");
        paragrafo.style.color = paragrafo.style.color === "red" ? "blue" : "red";
    }

    function handleMouseOver() {
        paragrafo.style.fontWeight = "bold";
    }
 
    function handleMouseOut() {
        paragrafo.style.fontWeight = "normal";
    }

    botao.addEventListener("click", handleClick);
    paragrafo.addEventListener("mouseover", handleMouseOver);
    paragrafo.addEventListener("mouseout", handleMouseOut);
}

function validarFormulario() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');

    let isValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.classList.add('invalid');
            isValid = false;
        } else {
            input.classList.remove('invalid');
        }
    });

    return isValid;
}

function enviarFormulario() {
    if (validarFormulario()) {
        enviarParaWhatsApp();
    }
}

// Função de máscara de telefone
function mascaraTelefone(telefone) {
    const texto = telefone.value;
    const textoApenasNumeros = texto.replace(/\D/g, '').substring(0, 11);

    let telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    if (textoApenasNumeros.length < 11) {
        telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }

    telefone.value = telefoneFormatado;
}

// Adicionar evento de input ao campo de telefone
const campoTelefone = document.getElementById('input-tel');
campoTelefone.addEventListener('input', function () {
    mascaraTelefone(this);
});

function enviarParaWhatsApp() {
    const nome = document.getElementById('input-nome').value;
    const email = document.getElementById('input-email').value;
    const telefone = document.getElementById('input-tel').value;
    const mensagem = document.getElementById('input-msg').value;

    const texto = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;
    const textoCodificado = encodeURIComponent(texto);
    const numeroWhatsApp = '5581983080118'; 
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    window.open(url, '_blank');
}
