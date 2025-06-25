import './Task.css'

const Task = ({titulo, objetivo}) => {
    return(
        <div>
            <h4>{titulo}</h4>
            <h5>{objetivo}</h5>
        </div>
    )
}

export default Task