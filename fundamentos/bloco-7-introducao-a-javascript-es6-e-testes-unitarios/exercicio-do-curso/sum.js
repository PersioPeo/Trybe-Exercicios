function sum  (a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Só pode ser numero');
    } 
    return a + b


} 

module.exports = sum; // exportando a função sum para outro aquivo para test.



 