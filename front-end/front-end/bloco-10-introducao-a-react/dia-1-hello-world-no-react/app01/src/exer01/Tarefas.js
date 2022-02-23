import React from "react";    
  

 class Tarefas extends React.Component{
     constructor() {
         super()
         this.Task = this.Task.bind(this) 
     }
    
    Task  (value) {
     return <li>{value}</li>
    }
      render() {

        const tarefas = ['Acorda', 'Escovar o dente', 'Tomar café', 'Estudar', 'Almoçar', 'Dormir'];
          return(
            <ul>{tarefas.map((tarefa) => this.Task(tarefa))}</ul>
          )
      }
  }

export default Tarefas;