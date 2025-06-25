import Task from "../Task"
import "./Prioridade.css"

const Prioridades = (props) => {
    return(
        <section>
            <div>
                <h3>{props.titulo}</h3>
                <div>
                <Task key={props.titulo} titulo={props.titulo} objetivo={props.objetivo}/>
                </div>
            </div>
        </section>
       
    )
}

export default Prioridades