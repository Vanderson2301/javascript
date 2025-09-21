function clicar(){
    num = document.getElementById('n1')
    tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Digite um número para gerar a tabuada.')
    } else {
        n = Number(num.value)
        c = 1
        tab.innerHTML = ''
        while (c <=10){
            item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}