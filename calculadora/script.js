

function insert(num1) { // função para chamar o resultado.
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num1;
}
function clean(){ // função para apagar o display.
    document.getElementById('resultado').innerHTML = "";
}  
function back(){ // função de volta ou curigi o numero digitado.
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){ // função para habilitar as operações da
    resultado = document.getElementById('resultado').innerHTML;   
    if(resultado){
        document.getElementById('resultado').innerHTML  = eval(resultado);// função eval para computar as operações da calculadora.
    }else{
        document.getElementById('resultado').innerHTML = "";
    }  

}