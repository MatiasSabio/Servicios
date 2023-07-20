import TablaServicos from "@/Components/Tablas/TablaServicio";

const TusServicios = () => {
	const head = [
		"Nombre",
		"Ultimo Vencimiento",
		"Monto",
		"Periodo",
		"Tipo",
		"Importancia",
		"Titular",
		"Compartido",
		"Facturas",
		"Observaciones",
		"pagado",
	];
	return (
		<div className='col-start-3 col-span-10 mt-20'>
			<TablaServicos head={head} />
		</div>
	);
};

export default TusServicios;
