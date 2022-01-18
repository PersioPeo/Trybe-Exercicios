const sum = require('./sum');
describe('To fazendo exercicios de fixar',() => {
    it('A soma de dois numeros', () => {
        expect(sum(4, 5)).toEqual(9);
    });

    it('A soma de dois numeros iguais', () => {
        expect(sum(0, 0)).toEqual(0);
    });
});
