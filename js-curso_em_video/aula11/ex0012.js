agora = new Date()
hora = agora.getHours()

if (hora < 5){
    console.log(`Boa Madrugada, jovem! São aproximadamente ${hora}h da manhã.`)
} else if (hora < 12){
    console.log(`Bom diaaa! São aproximadamente ${hora}h da manhã.`)
} else if(hora < 18){
    console.log(`Boa Tardeee! São aproximadamente ${hora}h da tarde.`)
} else {
    console.log(`Boa Noite! São aproximadamente ${hora}h da noite.`)
} 
