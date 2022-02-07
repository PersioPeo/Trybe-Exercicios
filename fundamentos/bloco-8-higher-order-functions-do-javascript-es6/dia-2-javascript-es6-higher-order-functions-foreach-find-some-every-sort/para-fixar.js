/*
1 - Use o método forEach chamando a callback showEmailList para apresentar os emails 
*/

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
    'persio@email.com'
  ];
  
  const showEmailList = (email) => {
    const div = document.querySelector('#email-list');
    div.innerHTML = '';
    email.forEach(element => {
      const p = document.createElement('p');
      p.innerHTML = `${element} : enviado com sucesso!`;
      div.appendChild(p);    
    });
      
  };
  // Adicione seu código aqui
  const btnFilter = document.querySelector('#btn-filter');
  btnFilter.addEventListener('click',() => showEmailList(emailListInData));

  
      
  
  