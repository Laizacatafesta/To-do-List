import Form from "./Componentes/Form";

function App() {

  const listsPrioridade = ["Alta", "Média", "Baixa"]

  return (
    <div className="App">
      <Form prioridades={listsPrioridade}/> 
    </div>
  );
}

export default App;
