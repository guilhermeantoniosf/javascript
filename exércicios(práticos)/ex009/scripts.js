let contador = 0
let res = document.querySelector('section#result')
function contar() {
    contador++
    res.innerHTML = `<p>Você clicou ${contador} vezes</p>`
}
function zerar() {
    contador = 0
    res.innerHTML = `<p>Você clicou ${contador} vezes</p>`
}
