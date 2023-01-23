//Declarando variáveis no TS
let nome: String = "Fulano"
let idade: number = 27
let altura: number = 1.92
let temGato: boolean = false

//Criando arrays
let nomes: String[] = ['Vitor','João','Lucas']
//Criando array de numeros
let numbers: number[]  = [1,2,3,4]

//Array misturado
// let coisas: (string|number)[] = ['Fulaninho',15,'Ciclano',20] 
let coisas: any[] = ['Fulaninh0',15,'Ciclano',20]

//Funções 
function firstLetterUpperCase(nome: String, age: number){
    let firstLetter = nome.toUpperCase()
    return firstLetter+nome
}