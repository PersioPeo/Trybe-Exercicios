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
  /*
   * 1 - Crie uma função que retorna o dano do dragão.
    O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
  */

const danoDragao = (dragon) => {
    const danoMinimo = 15;
    const danoMaximo = Math.floor((Math.random() * (dragon.strength - danoMinimo + 1) + danoMinimo))
    return danoMaximo;
}
console.log(danoDragao(dragon));
const danoMage = (mage) => {
    const danoMinimo = 15;
    const danoMaximo = Math.floor((Math.random() * (mage.intelligence - danoMinimo + 1) + danoMinimo))
    return danoMaximo;
}
console.log(danoMage(mage));
const danoWarrior = (warrior) => {
    const danoMinimo = 15;
    const danoMaximo = Math.floor((Math.random() * (warrior.strength - danoMinimo + 1) + danoMinimo))
    return danoMaximo;
}
console.log(danoDragao(warrior));
