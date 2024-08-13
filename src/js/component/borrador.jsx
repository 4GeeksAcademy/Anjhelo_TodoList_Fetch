let [cantidad, setCantidad] = useState(0)
	const [lista, SetLista] = useState([])
	console.log(cantidad);

	
	function sumar(){
		 setCantidad(cantidad + 1);
		 SetLista(lista.concat(<Lista numero={cantidad}/>))
	};

	function restar(){
		const newList = lista.slice(0, -1)
		SetLista(newList);

	}

	return (
		<div className="text-center">
			{lista}
			<input  value={Number(cantidad)} className="type" onChange={(event) => setCantidad(event.target.value)}/>
			<button onClick={sumar}>Agregar</button>
			<button onClick={restar}>Eliminar</button>
		</div>
	);