const objTimes = ['Corinthinas', 'Vitoria', 'Bahia', 'Cruzeiro', 'Curitiba', 'Sporte', 'Santa Cruz', 'Flamengo', 'Gremio'];

objTimes.forEach((item) =>  {
   const div = document.getElementById('id-time');
   const p = document.createElement('p');
   p.innerText = item;
   div.appendChild(p); 
});

const objTec = ['GitHub', 'Javascrit', 'Html', 'Css', 'React'];

    objTec.forEach((elemet) => {
    const div = document.getElementById('id-tec');
    const p = document.createElement('p');
    p.innerText = elemet;
    div.appendChild(p);
});

const ObjDespesas = ['Água', 'Luz', 'Gás', 'InterNet', 'Escola'];

    ObjDespesas.forEach((contas) => {
    const div = document.getElementById('id-despesas');
    const p = document.createElement('p');
    p.innerText = contas;
    div.appendChild(p);
});

const objSuperHerois = ['Batman', 'Flash', 'Mulher Maravilha', 'Robin'];
    const div = document.getElementById('id-herois');
    const p = document.createElement('p');
    p.innerText = contas;
    div.appendChild(p);
