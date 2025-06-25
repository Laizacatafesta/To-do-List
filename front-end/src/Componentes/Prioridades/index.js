import Task from "../Task"
import "./Prioridade.css"

const Prioridades = (props) => {
    return(
        (props.task.length > 0) ? <section>
            <div>
                <h3>{props.titulo}</h3>
                <div>
                    {props.task.map(task => <Task key={task.titulo} titulo={task.titulo} objetivo={task.objetivo}/>)}
                </div>
            </div>
        </section>
        :''
    )
}

export default Prioridades