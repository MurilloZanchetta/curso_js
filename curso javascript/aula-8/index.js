const nome = "Murillo Henrique";
const sobrenome = "Zanchetta Quirino";
let idade = 18;
let peso = 87.5;
let altura = 1.75;
const imc = peso/(altura**2);
let anoNascimento = 2023 - idade

console.log(
    nome, sobrenome, "tem", idade, "anos,", "pesa",
    peso+"kg",)
    
console.log(    
    "tem", altura+"de altura e seu IMC é de: ", imc
    )

console.log(
    "O", nome, sobrenome, "nasceu em :", anoNascimento

)

// tem outra maneira de fazer, que é essa

console.log(
    `${nome} ${sobrenome} tem ${idade} anos e pesa
    ${peso}kg e tem ${altura} de altura e seu IMC é de ${imc}`
    )

console.log(
    `O ${nome} ${sobrenome} nasceu em ${anoNascimento}`

)
