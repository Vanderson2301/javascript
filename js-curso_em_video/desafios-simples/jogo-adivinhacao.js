const jogoAdivinhacao = () => {
    const numero = Math.floor(Math.random() *100) +1;
    let resposta = null;
    while (resposta !== numero) {
        let solicitarResposta = prompt("Qual é o número que você acha que é o que eu tô pensando?");
         resposta = Number(solicitarResposta);
        if (isNaN(resposta)) {
            console.log("Digite um código válido ai, pivete!");
            continue;
        }
        if (resposta > numero) {
            console.log(`Que pena, não é esse número. O número corrreto é menor que ${resposta}.`);
        } else if (resposta < numero) {
            console.log(`Que pena, não é esse número. O número corrreto é maior que ${resposta}.`);
        } else {
            console.log(`Parabéns, você acertou! O número correto é o ${numero}`);
            break
        }
    }
}
jogoAdivinhacao();