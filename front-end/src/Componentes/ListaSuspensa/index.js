import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
    console.log(props.itens)
    // props é um OBJETO com tudo que o Formulario mandar
    return(
        <div className="lista-suspensa ">
            <label>{props.label}</label>
            <select>
              {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa