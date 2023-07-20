import { useState } from "react";

const Contador = (tiempo = 180, bandera?: Boolean, funcionDeCierre?: any) => {
	const [contador, setContador] = useState(tiempo);
	const [numeroIntervalo, setNumeroIntervalo] = useState(0);

	//if (bandera === false ) return 0

	const playContador = () => {
		const interval = setInterval(() => {
			setContador((anterior) => {
				if (anterior > 170) {
					return anterior - 1;
				} else {
					funcionDeCierre && funcionDeCierre();
					clearInterval(interval);
					return 0;
				}
			});
		}, 1000);
		console.log({ interval });

		setNumeroIntervalo(interval);
	};

	const cerrarContador = (int: any) => {
		setContador(tiempo);
		clearInterval(int);
	};
	return { playContador, cerrarContador, contador, numeroIntervalo };
};
export default Contador;
