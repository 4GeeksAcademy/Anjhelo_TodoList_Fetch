import React from "react"

const Lista = (props) => {
    const {tarea, eliminar} = props;
    return(
        <li className="list-group-item  border-start-0 border border-end-0 border-top-0 d-flex justify-content-between">{props.tarea}<button type="button" className="delete btn-close fs-7 ms-auto" aria-label="Close" onClick={eliminar}></button></li>
    );
}



export default Lista;