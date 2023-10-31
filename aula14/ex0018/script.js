function clicar(){
    I1 = document.getElementById('i1')
    F1 = document.getElementById('f1')
    P1 = document.getElementById('p1')
    res = document.getElementById('res')
    i = Number(i1.value)
    f = Number(f1.value)
    p = Number(p1.value)
    if (i == 0 || f == 0 ||p == 0) {
        window.alert ('Verifique os dados.')
    
        /*Contagem crescente*/ 
    } else if (i < f) {
        res.innerHTML = `Contando:`
        for (c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `	\u{1F3F3}`
        
        /*Contagem descrescente*/
    } else{
        res.innerHTML = `Contando:`
        for (c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `	\u{1F3F3}`
    }

     }