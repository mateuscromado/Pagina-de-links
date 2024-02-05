const frase = document.getElementById("frase")
const autor = document.getElementById("autor")



function sortearNumero() {
    return Math.floor(Math.random() * 8);
}

var indexSorte = sortearNumero();



var dados = [
    {
        frase1: "'Não é o mais forte que sobrevive, nem o mais inteligente, mas o que melhor se adapta às mudanças.'",
        autor1: "Charles Darwin"
    },


    {
        frase1: "'O homem que comete um erro e não corrige comete outro erro maior.'",
        autor1: " Confúcio"
    },
    {
        frase1: "'O maior inimigo do conhecimento não é a ignorância, é a ilusão do conhecimento.'",
        autor1: "Stephen Hawking"
    },
    {
        frase1: "'A verdadeira medida de um homem não é como ele se comporta em momentos de conforto e conveniência, mas como ele se mantém em tempos de desafio e controvérsia.'",
        autor1: " Martin Luther King Jr."
    },
    {
        frase1: "'Não tenha medo das dificuldades, pois é na luta que encontramos a verdadeira força. É superando obstáculos que crescemos e evoluímos.'",
        autor1: "Sócrates (atribuído)"
    },
    {
        frase1: "'A vida não é com aquela que vivemos, mas com aquela que recordamos e como a recordamos para contá-la.'",
        autor1: "Sêneca"
    },
    {
        frase1: "'Não é o que acontece com você, mas como você reage que importa.'",
        autor1: "Epiteto"
    },
    {
        frase1: "'A verdadeira sabedoria está em reconhecer a própria ignorância.'",
        autor1: "Sócrates"
    }
]

frase.textContent = dados[indexSorte].frase1
autor.textContent = dados[indexSorte].autor1

function reiniciar() {


    indexSorte = sortearNumero()
    frase.textContent = dados[indexSorte].frase1
    autor.textContent = dados[indexSorte].autor1

    console.log("funcionando")



}


setInterval(reiniciar,15000)


//Relógio digital
function relogio(){
var data = new Date()
var ano = data.getFullYear()
var mes = data.getMonth()
var dia = data.getDate()
var hora = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()
document.getElementById("data").textContent = "Data exata "

document.getElementById("data").textContent += ("2024 " + mes+1 +" " + dia + " -" + hora + "h     " + minutos+"m    "+segundos + "s")
}

setInterval(relogio,1000)

