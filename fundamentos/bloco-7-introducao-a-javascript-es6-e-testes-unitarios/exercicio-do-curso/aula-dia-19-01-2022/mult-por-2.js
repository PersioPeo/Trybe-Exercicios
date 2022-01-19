const multiplyByTwo = (number) => {
    if (!number) {
      throw new Error('Não é um número')
    }
    return number * 2;
  };

module.exports = multiplyByTwo;
 