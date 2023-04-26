const frutas = ["laranja", "limão", "uva"]

//1

const list1 = document.getElementsByTagName(`li`)[0]
list1.innerHTML = frutas[0]

const list2 = document.getElementsByTagName(`li`)[1]
list2.innerHTML = frutas[1]

const list3 = document.getElementsByTagName(`li`)[2]
list3.innerHTML = frutas[2]

const list4 = document.getElementsByTagName(`li`)[3]
list4.innerHTML = frutas[3]

//2

let input = document.getElementById('lista')

const imprimeTexto = () => {

    console.log(input.value)
}
//III
const evento = () => {
    list4.innerHTML = input.value
    input.value = ''
}