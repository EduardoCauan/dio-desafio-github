# Map

O método map é uma função que é aplicada em um array, realizando a função em ordem, criando um outro array.

## Sintaxe

array.map(callback, thisArg)

callback: função a ser executada em cada elemento

thisArg (opcional): valor de 'this' dentro da função de callback, se quisermos fazer uma operação de acordo com um objeto.


callback(item, index, array)

## forEach

const array = [1, 2, 3]

array.map((item) => item * 2) _retorna [2, 4, 6]

Usando o forEach

array.forEach((item) => item * 2) _retorna undefined, pois é necessario guardar em uma constante para utilizar o array

# Filter

Um filtro que retorna um novo array

## Sintaxe

array.filter(callback, thisArg)

## Exemplo

const frutas = ["maçã fuji", 'maçã verde', 'abacaxi']

frutas.filter((fruta) => fruta.includes(maçã))

retorna ['maçã fuji', 'maçã verde']

# Reduce

executa uma função em todos os elementos do array e retorna um valor unico

## Sintaxe

array.reduce(callbackFn, initialValue)

Callback: função a ser executada a partir do acumulador

initialValue(opcional): valor sobre o qual o retorno final irá atuar

##Exemplo

const callbackFn = function(accumulator, currentValue, index, array){
    do something
}

array.reduce(callbackFn, initialValue)