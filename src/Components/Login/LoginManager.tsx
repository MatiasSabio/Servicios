import { loginManagerInterface } from "@/Models";
import React from "react";
import { RecuperarPassMessage, Login, RecuperarPass } from "./";
import { Register, TokenForm } from "./Register";

interface Params {
	open: loginManagerInterface;
	setOpen: React.Dispatch<React.SetStateAction<loginManagerInterface>>;
	accion: any;
}
enum SelectOpen {
	login = "login",
	register = "register",
	recuperar = "recuperar",
	recuperarPassMessage = "recuperarPassMessage",
	token = "token",
}
const LoginManager = (params: Params) => {
	const { open, setOpen, accion } = params;
	const close = (select: SelectOpen) => {
		setOpen({ ...open, [select]: false });
	};
	const abrir = (select: SelectOpen) => {
		setOpen({ ...open, [select]: true });
	};
	return (
		<>
			<Login
				open={open}
				close={() => close(SelectOpen.login)}
				setOpen={setOpen}
				sesion={accion}
			/>

			<Register
				open={open}
				close={() => close(SelectOpen.register)}
				setOpen={setOpen}
				sesion={accion}
			/>

			<TokenForm
				open={open}
				close={() => close(SelectOpen.token)}
				setOpen={setOpen}
				sesion={accion}
			/>

			<RecuperarPass
				open={open}
				close={() => close(SelectOpen.recuperar)}
				setOpen={setOpen}
				sesion={accion}
			/>
			<RecuperarPassMessage
				open={open}
				close={() => close(SelectOpen.recuperarPassMessage)}
				setOpen={setOpen}
				sesion={accion}
			/>
		</>
	);
};

export default LoginManager;
