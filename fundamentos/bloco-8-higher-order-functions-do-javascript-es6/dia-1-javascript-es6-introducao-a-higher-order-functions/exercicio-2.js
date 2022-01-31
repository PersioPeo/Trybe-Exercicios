// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório 
// entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é 
// igual ao número sorteado. O retorno da sua HOF deve ser uma string 
// (Ex: "Tente novamente" ou "Parabéns você ganhou").

const resultSorteio = (numeroApostado, checar) => {
  const numeroSorteado = Math.floor(Math.random()*5)+1
    return checar(numeroSorteado, numeroApostado);
}

const checar = (numeroSorteado, meuNumero) => {
    if (numeroSorteado === meuNumero) {
        return "Tente novamente";
    } else {
        return "Parabéns você ganhou";
    }    
}
console.log(resultSorteio(5, checar));