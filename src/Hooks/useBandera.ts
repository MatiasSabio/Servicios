import { useState } from "react";

type Props = {
	init: boolean;
};

const useBandera = (props?: Props) => {
	const [bandera, setBandera] = useState(props?.init || false);

	const setTrue = () => setBandera(true);
	const setFalse = () => setBandera(false);
	const setChange = () => setBandera((b) => !b);

	return { bandera, setTrue, setFalse, setChange };
};

export default useBandera;
