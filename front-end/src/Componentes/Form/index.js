import CampoTexto from "../CampoTexto"

const Form = (props) => {
    return(
        <section>
            <form>
                <h2>Digite sua tarefa</h2>
                <CampoTexto label="Task" placeholder="Digite aqui sua task"/>
                <CampoTexto label="Goal" placeholder="Digite aqui seu objetivo"/>

                <button>Criar Task</button>
            </form>
        </section>
    )
}

export default Form