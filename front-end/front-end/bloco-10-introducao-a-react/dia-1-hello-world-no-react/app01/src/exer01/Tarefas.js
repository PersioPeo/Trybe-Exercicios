import React from "react";    
  
const tarefas = ['Acorda', 'Escovar o dente', 'Tomar café', 'Estudar', 'Almoçar', 'Dormir'];
 class Tarefas extends React.Component{
     constructor() {
         super()
         this.Task = this.Task.bind(this) 
     }
    
    Task  (value) {
     return <li>{value}</li>
    }
      render() {        
          return(
            <ul>{tarefas.map((tarefa) => this.Task(tarefa))}</ul>
          )
      }
  }

export default Tarefas;