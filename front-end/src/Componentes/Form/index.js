import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import "./Form.css"

const Form = (props) => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar um card com tarefa e objetivo</h2>
                <CampoTexto label="Task" placeholder="Digite aqui sua task"/>
                <CampoTexto label="Objetivo" placeholder="Digite aqui seu objetivo"/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Form