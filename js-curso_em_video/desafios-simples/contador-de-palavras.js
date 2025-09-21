const analisarFrase = (frase) => {
    const palavras = frase.toLowerCase().replace(/[,.!?]/g, "").split(" ");
    const totalPalavras = palavras.length;

    let palavraMaisLonga = "";
    palavras.forEach(palavra =>{
        if (palavra.length > palavraMaisLonga.length) {
            palavraMaisLonga = palavra;
        }
    });
    
    const frequencia = {};
    palavras.forEach (palavra =>{
        frequencia[palavra] = (frequencia[palavra] || 0) +1
    });

    console.log(`A quantidade de palavras é: ${totalPalavras}.`)
    console.log(`A palavra mais longa é: ${palavraMaisLonga}.`)
    console.log(`Essas são a quantidade de palavras que se repetem:`)
    for (const palavra in frequencia) {
        console.log(`${palavra}: ${frequencia[palavra]}`)
    }
};
const frase = 'A vida é um desafio, e cada desafio nos ensina algo novo.';
analisarFrase(frase);