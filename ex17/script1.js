function adicionar(){
    var numb = document.getElementById('txtnum')
    var valor = Number(numb.value)
    var caixa = document.getElementById('selbox')
    if(valor <= 0){
        window.alert ('Digite um valor para iniciar a verificação.')
    } else{
        caixa.innerHTML = ''
    }
}
