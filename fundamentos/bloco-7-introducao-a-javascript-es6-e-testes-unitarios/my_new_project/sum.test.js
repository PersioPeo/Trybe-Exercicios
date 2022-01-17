const sum = (a, b) => a + b; // Aqui está a função.

test('sums two values', () => { // Começando o teste.
  expect(sum(2, 3)).toEqual(5);
});
it('somando dois numeros negativos', () => {
  expect(sum(-2, -6)).toEqual(-8);  
});
it('somando numero negativo com positivo', () => {
  expect(sum(2, -3)).toEqual(-1);  
});

it('Somando numero negativo com positivo', () =>{
  expect(sum(-1, 4)).toEqual(3);
})