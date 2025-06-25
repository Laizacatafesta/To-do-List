import { useState } from "react";
import Form from "./Componentes/Form";
import Prioridades from "./Componentes/Prioridades";

function App() {

  const listsPrioridade = ["Alta", "Média", "Baixa"]

  const [tasks, setTask] = useState([])
  
  const novaTaskCriada =(task) => {
    setTask([...tasks, task]) // Isso atualiza o estado tasks com a nova lista.
  }

  return (
    <div className="App">
      <Form prioridades={listsPrioridade.map(prioridade => prioridade.titulo)} taskCriada={task => novaTaskCriada(task)}/> 
      {listsPrioridade.map(prioridade => <Prioridades
      titulo={prioridade.titulo}
      />)}
    </div>
  );
}

export default App;
