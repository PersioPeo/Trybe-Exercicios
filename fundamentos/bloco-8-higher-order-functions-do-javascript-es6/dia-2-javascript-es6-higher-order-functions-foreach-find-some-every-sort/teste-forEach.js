const obj = ['azul', 'preto', 'amarelo', 'rosa', 'branco', 'vermelho', 'verde', 'cinza', 'dourado', 'prata'];
const mostrarCores = (obj) => {
  const divSelecionada = document.getElementById('id-cores');
  divSelecionada.innerHTML = '';
  obj.forEach(item => {
    const p = document.createElement('p');
    p.innerHTML = item;
    divSelecionada.appendChild(p);  
      
  });

}














const btn = document.getElementById('button');
btn.addEventListener('click', () => mostrarCores(obj))