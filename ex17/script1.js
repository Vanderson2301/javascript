document.addEventListener('keydown', function(e) {
    if(e.key == "Enter"){
      document.getElementById("button").click();
    }
})

let numb = document.getElementById('txtnum')
let caixa = document.getElementById('selbox')
let res = document.getElementById('resu')
let numeros = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100)
        return true
    else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }   
}

function adicionar(){
    if(isNumero(numb.value) && !inLista(numb.value, numeros)){
        numeros.push(Number(numb.value))
        let item = document.createElement('option')
        item.text = `Valor ${numb.value} adicionado.`
        caixa.appendChild(item)
        res.innerHTML = ''
        
    } else{
        window.alert ('Valor inválido ou já encontrado na lista.')
    }
    numb.value = ''
    numb.focus()
}

function finalizar(){
    if (numeros.length == 0){
        window.alert ('Adicione algum valor antes de finalizar!')
    } else {
        let total = numeros.length
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let média = 0
        
        for(let pos in numeros){
            soma += numeros[pos]
            média = soma / total
            if (numeros[pos] > maior)
                maior = numeros[pos]
            if (numeros[pos] < menor)
                menor = numeros[pos]

            }
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número cadastrado foi o ${maior}.</p>`
        res.innerHTML += `<p>O menor número cadastrado foi o ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os números é igual a ${soma}.</p>`
        res.innerHTML += `<p>A média de todos os números é igual a ${média}.</p>`

        } 

}


/*
`
O maior valor informado foi o ${}. 
O menor valor informado foi o ${};
Somando todos os valores, temos o ${ + }.
A média dos valores digitados é ${}
*/