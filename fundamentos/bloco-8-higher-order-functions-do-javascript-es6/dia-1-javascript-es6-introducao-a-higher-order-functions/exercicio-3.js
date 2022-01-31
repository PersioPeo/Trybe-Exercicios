// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), 
// o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma 
// função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa 
// estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não 
// houver resposta ("N.A") não altera-se a contagem.



const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const funcHof = (respCorreta, respAVerificar, callBeck) => {
    let total = 0;
    for(let i = 0; i < respAVerificar.length; i += 1) {
        const atual = respAVerificar[i];
        const verifica = callBeck(respCorreta[i], respAVerificar[i])
        total += verifica;
    }
    return `O Resultado: ${total}, pontos`;
}

const callBeck = (respCorreta, respAVerificar) => {
    if (respCorreta === respAVerificar){
        return 1;
    } else if (respAVerificar === 'N.A') {
        return 0;
    }
        return -0.5; 
}

let imprime = funcHof(RIGHT_ANSWERS, STUDENT_ANSWERS, callBeck);
console.log(imprime);