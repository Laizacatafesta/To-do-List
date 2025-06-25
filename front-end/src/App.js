import Form from "./Componentes/Form";
import Prioridades from "./Componentes/Prioridades";

function App() {

  const listsPrioridade = ["Alta", "Média", "Baixa"]
  
  const novaTaskCriada =(task) => {
    
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
