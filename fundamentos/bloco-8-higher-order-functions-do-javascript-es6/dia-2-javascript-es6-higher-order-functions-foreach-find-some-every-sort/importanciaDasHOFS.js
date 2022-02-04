const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];
for(let i = 0; i < students.length; i +=1) {
    const atual = students[i];
    if(atual.grade >= 60) {
        atual.approved = 'Aprovado!'
    } else {
        atual.approved = 'Reprovado!'
    }
}
console.log(students);