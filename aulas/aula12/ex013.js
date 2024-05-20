var agora = new Date()
var diasemana = agora.getDay()
diasemana = 1
/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Segunda
4 = Segunda
5 = Segunda
*/
console.log(diasemana)
switch(diasemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    
    default: 
    console.log('Dia inválido')
    break
}