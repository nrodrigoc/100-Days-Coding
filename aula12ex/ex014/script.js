function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hora = 21
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora <= 12){
        img.src = 'manha.jpg'
        document.body.style.background = '#77c4f7'
    }else if(hora <= 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#6d4e94'
    }else{
        img.src = 'noite.jpg'
        document.body.style.background = '#111c19'
    }
}