import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
    // props é um OBJETO com tudo que o Formulario mandar
    return(
        <div className="lista-suspensa ">
            <label>{props.label}</label>
             
            <select>
                <option>
                    
                </option>
            </select>
        </div>
    )
}

export default ListaSuspensa