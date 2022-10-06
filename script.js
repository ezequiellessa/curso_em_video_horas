function carregar(){

    var msg = document.getElementById("msg")
    var imagem =document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
 

    msg.innerHTML = `Agora são ${hora}:00 horas `

    if (hora >= 12 && hora < 18){
        //boa tarde
        imagem.src = "foto-tarde.png"
        msg.innerHTML += "boa tarde"
        document.body.style.background ="green"

    }
     else if (hora >= 0 && hora < 12){
        //bom dia
        imagem.src = "foto-manha.png"
        msg.innerHTML += "bom dia"
        
        
     }
     else {
        //boa noite
        imagem.src = "foto-noite.png"
        msg.innerHTML += "\n"+"boa noite"
        
        document.body.style.background ="black"
        
     }

}