function carregar(){
agora = new Date()
hora = agora.getHours()
dvhora = document.getElementById('hora')
dimagem = document.getElementById('foto')
dvhora.innerHTML = `Agora são aproximadamente <strong>${hora}</strong> horas`
if (hora < 12 ) {
    document.body.style.background = 'rgb(238, 242, 180)'
    dimagem.src = 'imagens/fotomanha.png'
    
} else if (hora < 18){
    document.body.style.background = 'rgb(159, 136, 84)'
    dimagem.src = 'imagens/fototarde.png'
} else {
    document.body.style.background = 'rgb(50, 43, 27)'
    dimagem.src = 'imagens/fotonoite.png'
}
}
