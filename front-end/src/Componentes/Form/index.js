import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Form.css"

const Form = (props) => {
    console.log(props)
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar um card com tarefa e objetivo</h2>
                <CampoTexto label="Task" placeholder="Digite aqui sua task"/>
                <CampoTexto label="Objetivo" placeholder="Digite aqui seu objetivo"/>
                <ListaSuspensa 
                label="Escolha a prioridade" 
                obrigatorio={true}
                itens={props.prioridades}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Form