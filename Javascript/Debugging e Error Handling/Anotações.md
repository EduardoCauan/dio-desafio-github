## ECMAScript Error

Ocorrem em tempo de execução

Composto por uma
-Mensagem
-Nome 
-Linha
-Call stack

## DOMException

DOM é Document Object Model

Erros relacionados ao DOM

## Throw e Return

function verificaPalindromo(string) {
    if (!string) throw "String Inválida;

}

utilizando o throw, o console se comporta como se tivesse ocorrido um erro.

## TryCatch

function tryCatchExemplo(string){
    try{
        verificaPalindromo(string);
    }
    catch(e){
        console.log(e);
    }
}

o catch trata o erro e informamos como desejamos tratá-lo ou informá-lo

## Finally

Vai ser executado para informar procedimentos utilizados para o erro.

## Objeto Error

new Error(message, fileName, lineNumber)

const MeuErro = new Error('Mensagem Inválida');

throw MeuErro;

Utilizado para mandar uma mensagem de erro.

O erro também pode ter um nome

### Exemplo

const MeuErro = new Error('Mensagem Inválida');
MeuErro.name = 'InvalidMessage';


MeuErro.stack
"InvalidMessage: Mensagem Inválida\n   at < anonumous>:3:17