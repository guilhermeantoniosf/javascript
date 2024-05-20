function carregar(){
    let msg = document.getElementById('msg')
    let otmsg = document.getElementById('olá')
    let data = new Date()
    let hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora}`
    if (hora >= 0 && hora < 12){
        document.body.style.backgroundColor = 'red'
        img.innerText = 'Bom dia'
    } else if (hora >= 12 && hora < 18){
        document.body.style.backgroundColor = 'orange'
        img.innerText = 'Boa tarde'
    }else{
        document.body.style.backgroundColor = 'darkblue'
        img.innerText = 'Boa noite'
    }
    

}