function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('Erro, digita denovo aí, tem alguma parada estranha')
    } else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'fotodeperfil-github.jpg')
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 50){
                // Adulto
            } else {
                // idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                // Criança
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 50){
                // Adulto
            } else {
                // idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Vc é um(a) ${genero} de ${idade} anos de idade`
        res.appendChild(img)

    }
}