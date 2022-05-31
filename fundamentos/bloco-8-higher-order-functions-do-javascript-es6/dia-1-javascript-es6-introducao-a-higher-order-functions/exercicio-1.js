const newEmployees = (gerandoFuncionario) => {
   const employees = {
      id1: gerandoFuncionario('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: gerandoFuncionario('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: gerandoFuncionario('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
//   1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma 
//   nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa 
//   contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa 
//   funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const gerandoFuncionario = (nomeFunc) => {
    const email = nomeFunc.toLowerCase().split(' ').join('_');
    return {nomeFunc, email: `${email}@trybe.com`}
}

console.log(newEmployees(gerandoFuncionario));