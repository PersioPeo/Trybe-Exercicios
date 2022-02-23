import React from "react";

const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }

  const tarefas = ['Acorda', 'Escovar o dente', 'Tomar café', 'Estudar', 'Almoçar', 'Dormir'];

  class Tarefas extends React.Component{
      render() {
          return(
            <ul>{tarefas.map((tarefa) => Task(tarefa))}</ul>
          )
      }
  }

export default Tarefas;