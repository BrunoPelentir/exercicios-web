function verificarResposta(opcaoSelecionada) {
    const respostaCorreta = "Blumenau";
    const resultado = document.getElementById("resultado");
    if (opcaoSelecionada.textContent === respostaCorreta) {
        resultado.textContent = "Resposta correta!";
        opcaoSelecionada.style.backgroundColor = "green";
    } else {
        resultado.textContent = "Resposta incorreta. Tente novamente.";
        opcaoSelecionada.style.backgroundColor = "red";
    }

    // Desabilitar a seleção de outras opções após a resposta
    const opcoes = document.querySelectorAll("#opcoes li");
    opcoes.forEach(opcao => {
        opcao.style.pointerEvents = "none";
    });
}