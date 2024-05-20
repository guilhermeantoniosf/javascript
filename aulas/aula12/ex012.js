var agora = new Date() // He gets the date on the system
var hora = agora.getHours() // he gets the hour on system
console.log(`Agora são ${hora} horas`)
if (hora < 12) {
    console.log('Bom dia')
} else if(hora <= 18){
    console.log('Boa tarde')
} else{
    console.log('Boa noite')
}