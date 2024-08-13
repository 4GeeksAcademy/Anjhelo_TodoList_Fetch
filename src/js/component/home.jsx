import React, { useState } from "react";
import Lista from "./tarea";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [entrada, setEntrada] = useState("")
	const [lista, setLista] = useState([])


	function guardar(event) {
		if (event.key === 'Enter') {

            const valor = event.target.value;

            if (valor.trim() === "") {

                return;

            } else {
                
				setLista(lista.concat(valor));
                setEntrada("");
                event.target.value = "";
            }
        }
		}

	function eliminar(index)
	{
		const nuevaLista = lista.filter((_, i) => i !== index);
        setLista(nuevaLista);
	}




	return(
		<div className="container w-50">
			<div>
				<h1 className="text-center">todos</h1>
			</div>
		<div>
			<ul className="list-group border p-2 ">
				<input type="text" className="list-group-item  border-start-0 border border-end-0 border-top-0" onKeyDown={guardar}></input>
				{lista.map((tarea, index) => (
				<Lista tarea={tarea} key={index} eliminar={() => eliminar(index)}/>))}
				<label className="fs-7" style={{color: "#999"}}>{lista.length} item left</label>
			</ul>
		</div>
		</div>
	);

};

export default Home;