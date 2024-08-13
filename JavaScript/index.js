
let data = [
    {
        nome: "Mariana",
        idade: 18,
        sexo: "Feminino",
        cor: "Rosa"
    },
    {
        nome: "Juliana",
        idade: 21,
        sexo: "Feminino",
        cor: "Preto"
    },
    {
        nome: "Milena",
        idade: 19,
        sexo: "Feminino",
        cor: "Roxo"
    },
    {
        nome: "Helena",
        idade: 18,
        sexo: "Feminino",
        cor: "Verde"
    },
    {
        nome: "Ingrid",
        idade: 19,
        sexo: "Feminino",
        cor: "Azul"
    }
]

const load = () => {
    let nome = (document.getElementById("nome")).value;
    let idade = document.getElementById("idade").value;
    let sexo = document.getElementById("sexo").value;
    let cor = document.getElementById("cor").value;

    data.push({nome: nome, idade: idade, sexo: sexo, cor: cor})
    
    nome = "";
    idade = 0;
    sexo  = "";
    cor = "";

    let obj = document.getElementById("cliente");
    obj.innerHTML = "<h1>CLIENTES<\h1>";
    data.forEach(cliente => {
        obj.innerHTML += `<h2>${cliente.nome}<\h2>`
        obj.innerHTML += `<h4>Idade: ${cliente.idade}<\h4>`
        obj.innerHTML += `<h4>Sexo: ${cliente.sexo}<\h4>`
        obj.innerHTML += `<h4>Cor: ${cliente.cor}<\h4>`
    })
}



