var hora = 3

var div1 = document.querySelector(`div#divisao1`)
var corpo = document.querySelector(`body#corpo`)
if(hora <= 12){   
    div1.innerHTML = "Bom dia..."
}else if(hora <= 18){
    div1.innerHTML = "Boa tarde..."
}else
    div1.innerHTML = "Boa noite..."
