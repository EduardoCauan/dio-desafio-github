# Funções

## Estrutura

function nome(parametros){
    instruções
}

Variáveis ciradas dentro de uma função apenas podem ser utilizadas dentro dela.

Quando invocamos o "return", a função deixa de ser executada.

## Funções Anônima

const soma = function (a, b){
    return a + b;
}

a função não possui um nome, por isso é anônima

## Função autoinvocável

IIFE (Immediately Invoked Function Expression)

Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada.

### Exemplo
(
function() {
    let name = "Digital Innovation One";
    return name;
}
)();

Também pode ser utilizada com parâmetros ou armazenada em uma variável

### Exemplo
(
function (a, b){
    return a + b;
}
)(1, 2)

### Exemplo
(
    const soma = function (a, b){
    return a + b;
}
)(1, 2);

## Callbacks

Função passada como argumento para outra função. Com o callback, temos maior controle da ordem de chamadas.

### Exemplo

const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const soma = function(num1, num2){
    return num1 + num2;
}

const sub = function(num1, num2){
    return num1 - num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);

# Arrays

## Spread

Spread é uma forma de lidar separadamente com elementos de um array.
O que era parte de um array se torna um elemento independente.


### Exemplo

function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

Utilizando os três pontos


## Rest

combina os argumentos em um array.

### Exemplo

function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho()
confereTamanho(1, 2)
confereTamanho(3, 4, 5)

# Objetos

## Object Destructuring

Entre as chaves, podemos filtrar aqueles dados que nos interessam

const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}){
    return id
}

function getFullName({fullName: {firstName: first, lastName: last}}){
    return ${first} ${last};
}

userId(user)
// 42

getFullName(user)
// John Doe
