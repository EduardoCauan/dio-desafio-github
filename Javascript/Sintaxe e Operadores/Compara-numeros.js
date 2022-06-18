
function compara(num1, num2){
    if (!num1 || !num2) return "Defina dois números!";
    const PrimeiraFrase = criaPrimeiraFrase(num1, num2);
    const SegundaFrase = criaSegundaFrase(num1, num2);
    return `${PrimeiraFrase} ${SegundaFrase}`
}


function criaPrimeiraFrase(num1, num2){
    let saoIguais = ''
    if(num1 !== num2) {
        saoIguais = 'não'
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;

    let resultado10 = 'menor'
    let resultado20 = 'menor'
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10){
        resultado10 = 'maior';
    }

    if(compara20){
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 é ${resultado20} que 20`
}

console.log(compara(12,12));
