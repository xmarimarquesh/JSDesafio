var integer = 10;

const text = "Oie";

let dict = {
    valor: 3,
    outrovalor: "Oi",
    json: {
        a: "a",
        b: ["b", "a", 1, 10],
        c: "c"
    }
};

dict.idade = 18;

let tupla = (1, 2, 3);

let list = [1,2,3];
list.push(4);
list.push("Ola")

let x = list[0];

for(let i = 0; i < 10; i++){
    if(i < 5){
        console.log("Menor que 5");
    }else{
        console.log("Maior que 5");
    };
};

function nome(a, b, c){
   return a + b + c; 
}

const func = function(a, b, c){
    return a + b + c;
}

func(1, 2, 3);

const funcao = (a, b) => a + b;

setTimeout (() => {
    alert("a");
}, 5000);

setTimeout(function() {
    alert("a");
}, 5000);

setInterval(() => {
    alert("a");
}, 5000);

let lista = [1, 2, 3]
let soma = 0;
lista.forEach(x => {
    soma += x;
});

console.log(soma);


//-------------

const myFunc = () => {
    alert("Botão clicado", 'success');
}

let xis = document.getElementById("id");
let y = document.getElementById("y");
y.innerHTML = xis.innerHTML;