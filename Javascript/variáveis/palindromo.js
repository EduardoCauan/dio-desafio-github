function verificaPalindromo(frase){
    if(!frase) return "string inexistente";
    fraseInvertida = frase.split("").reverse().join("");

    return frase === fraseInvertida;
}



// solução 2

function verificaPalindromo2(frase){
    if (!frase) return "string inexistente";

    for (let i = 0; i < frase.length / 2; i++){
        if (frase[i] !== frase[frase.length - 1 - i]){
            return false;
        }
    }

    return true;
}
console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo2("ovo"));