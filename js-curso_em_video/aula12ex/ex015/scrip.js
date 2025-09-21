function verificar(){
//idade---------------------------
    a1 = new Date()
agora = a1.getFullYear()
fano = document.getElementById('txtano')
ano = Number(fano.value)
idade = agora - ano
img = document.createElement('img')
img.setAttribute('id', 'foto')
img.style.wid
//gênero---------------------------
sexo = document.getElementsByName('radsex')
    if(sexo[0].checked){
        gênero = 'Homem'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'homem_crianca.png')
            } else if (idade < 18){
                img.setAttribute('src', 'homem_jovem.png')
            } else if(idade < 100){
                img.setAttribute('src', 'homem_adulto.png')
            }
} else if (sexo[1].checked){
    gênero = 'Mulher'
    if(idade >= 0 && idade < 12){
        img.setAttribute('src', 'mulher_crianca.png')
    }else if (idade < 18){
        img.setAttribute('src', 'mulher_jovem.png')
    } else{
        img.setAttribute('src', 'mulher_adulto.png')
    }
}
res = document.querySelector('p#res')
if (ano == 0 || ano > agora){
    window.alert('[ERRO] Verifique os dados e tente novamente.')
} else{
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
    res.appendChild(img)
}
}
