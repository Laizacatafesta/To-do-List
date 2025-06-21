import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Form.css"

const Form = (props) => {
    console.log(props)

    const [titulo, setTitulo] = useState('')
    const [objetivo, setObjetivo] = useState('')
    const [prioridade, setPrioridade] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.taskCriada({
            titulo,
            objetivo,
            prioridade
        })

        setTitulo('')
        setObjetivo('')
        setPrioridade('')
        
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar um card com tarefa e objetivo</h2>

                <CampoTexto 
                obrigatorio={true}
                label="Task" 
                placeholder="Digite aqui sua task"
                valor={titulo}
                aoAlterado={valor => setTitulo(valor)}
                />

                <CampoTexto 
                obrigatorio={true}
                label="Objetivo" 
                placeholder="Digite aqui seu objetivo"
                valor={objetivo}
                aoAlterado={valor => setObjetivo(valor)}
                />

                <ListaSuspensa 
                label="Escolha a prioridade" 
                obrigatorio={true}
                itens={props.prioridades}
                valor={prioridade}
                aoAlterado={valor => setPrioridade(valor)}
                />

                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Form