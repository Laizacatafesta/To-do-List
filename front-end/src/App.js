import Form from "./Componentes/Form";

function App() {

  const listsPrioridade = ["Alta", "Média", "Baixa"]
  
  const novaTaskCriada =(task) => {
    
  }

  return (
    <div className="App">
      <Form prioridades={listsPrioridade} taskCriada={task => novaTaskCriada(task)}/> 
    </div>
  );
}

export default App;
