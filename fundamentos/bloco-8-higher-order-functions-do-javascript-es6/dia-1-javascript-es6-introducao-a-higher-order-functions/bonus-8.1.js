const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };  
  const battleMembers = { mage, warrior, dragon };
/**
 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior . 
 */  
/** 1 - Crie uma função que retorna o dano do dragão.
    O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
 */
const danoDragon = (ojbDragon) => {
  const danoMinimo = 15;
  const danoMaximo = Math.floor(Math.random() * (ojbDragon.strength - danoMinimo) + danoMinimo);
  return danoMaximo;
}    
/*
 2 - Crie uma função que retorna o dano causado pelo warrior .
    O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
*/
const danoWarrior = (objWarrior) => {
  const danoMinimo = warrior.strength;
  const danoMaximo = warrior.weaponDmg * danoMinimo;
  const danoWarrior = Math.floor(Math.random()* (danoMaximo - danoMinimo +1) + danoMinimo);
  return danoWarrior;
}
/**
  3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
    O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
    A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
 */
    const atackDoMago = (objMago) => {
      const magoMana = mage.mana;
      const danoMinimo = mage.intelligence;
      const danoMaximo = danoMinimo * 2;
      const estatisticasDoTurno = {
        manaGasto : 0,
        danoInserido : 'Não possui mana suficiente',
      }
      if(magoMana > 15) {
        const danoMago = Math.floor(Math.random()* (danoMaximo - danoMinimo +1) + danoMinimo);
        estatisticasDoTurno.manaGasto = 15;
        estatisticasDoTurno.danoInserido = danoMago;
        return estatisticasDoTurno;
      }
      return estatisticasDoTurno;
    }
/*
 Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.
Copie o código abaixo e inicie sua implementação: 
*/
/*
1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior . 
*/
const gameActions = {
  // Crie as HOFs neste objeto.
  turnoDoGerreiro: (danoWarrior) => {
    const danoGerreiro = danoWarrior(warrior);
    warrior.damage = danoGerreiro;
    dragon.healthPoints -= danoGerreiro;    
  },
};
