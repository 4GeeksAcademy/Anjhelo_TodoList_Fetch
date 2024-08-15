import React, { useEffect, useState } from "react";
import Lista from "./tarea";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [entrada, setEntrada] = useState("");
	const [lista, setLista] = useState([]);



	useEffect(() => {
		obtenerLista();
	}, []);





	function crearUsuario()
	{
		fetch("https://playground.4geeks.com/todo/users/anjhelo", {

			method: "POST",
			headers: {
				"Content-Type": "application/json" 
			},
			body: JSON.stringify({username: "anjhelo"})
		})

		.then((response) => response.json)
		.then((data) => console.log(data))
		.catch((error) => console.log(error))
	}



	function obtenerLista()
	{
		fetch('https://playground.4geeks.com/todo/users/anjhelo', {
			method: 'GET'
		})
		.then((response) => {console.log(response);
			
			if(response.status === 404)
			{
				crearUsuario();
				alert("El usuario no existe!")
			}
			
			return response.json()})

		.then((data) =>{

			setLista(data.todos);
			return console.log(data)
		})

		.catch((error) => console.log(error))
	}




	function guardarTarea(valor)
	{
		fetch("https://playground.4geeks.com/todo/todos/anjhelo", {
			method: "POST",
			headers: {
				"Content-Type": "application/json" 
			},
			body: JSON.stringify({ "label": valor, "is_done": false })
		})
		.then(response => response.json())
		.then(data => {
			
			setLista(prevLista => [...prevLista, data]);
			console.log(data);
		})
		.catch(error => console.log(error));
	}

	function guardar(event) {
		if (event.key === 'Enter') {

            const valor = event.target.value;

            if (valor.trim() === "") {

                return;
            } else {

				guardarTarea(valor);

				
                setEntrada("");
                event.target.value = "";
				
				
            }
        }
		}


	function eliminar(id)
	{
		eliminarTodo(id);
		// const nuevaLista = lista.filter((_, i) => i !== index);
        setLista(temp => temp.filter(tarea => tarea.id !== id));
	}

	function eliminarTodo(id)
	{
		fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
			method: 'DELETE'
		})
		
		.then((response) => response.json())
		.then((data) =>console.log(data))
		.catch((error) => console.log(error))
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
				<Lista tarea={tarea.label} key={tarea.id} eliminar={() => eliminar(tarea.id)}/>))}
				
				<label className="fs-7" style={{color: "#999"}}>{lista.length} item left</label>
			</ul>
		</div>
		</div>
	);


};




export default Home;