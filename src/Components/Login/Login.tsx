import { LavelType, loginManagerInterface, MensajeType } from "@/Models";
import {
	Box,
	Button,
	Checkbox,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControlLabel,
	TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
interface Params {
	open: loginManagerInterface;
	setOpen: any;
	close: any;
	sesion: any;
}

const Login = (params: Params) => {
	const { open, close, sesion, setOpen } = params;
	const [check, setCheck] = useState(true);

	const iniciarSesion = () => {
		close();
		sesion();
	};
	const openRegister = () => {
		console.log("ascasc");
		setOpen({ ...open, register: true, login: false });
	};
	const openRecuperar = () => {
		setOpen({ ...open, recuperar: true });
	};
	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
			mantenerSesionIniciada: true,
		},
	});
	const handleChangeSesionIniciada = () => {
		const actual = getValues("mantenerSesionIniciada");
		setCheck(!actual);
		setValue("mantenerSesionIniciada", !actual);
	};
	return (
		<Dialog open={open.login} onClose={close}>
			<form action=''>
				<DialogTitle>{LavelType.LOGIN}</DialogTitle>
				<DialogContent>
					<TextField
						margin='dense'
						{...register("email", { required: MensajeType.REQUERIDO })}
						label={LavelType.EMAIL}
						type='text'
						fullWidth
						variant='standard'
						error={Boolean(errors.email)}
						helperText={errors.email?.message}
						autoComplete='off'
						autoFocus={true}
					/>
					<TextField
						margin='dense'
						{...register("password", { required: MensajeType.REQUERIDO })}
						label={LavelType.CONTRASEÑA}
						type='text'
						fullWidth
						variant='standard'
						error={Boolean(errors.password)}
						helperText={errors.password?.message}
						autoComplete='off'
					/>
					<Box>
						<FormControlLabel
							{...register("mantenerSesionIniciada")}
							control={<Checkbox />}
							checked={check}
							label={LavelType.MANTENER_SESION_INICIADA}
							style={{ color: "rgba(0, 0, 0, 0.6)" }}
							onChange={handleChangeSesionIniciada}
						/>
						<Button size='small' onClick={openRecuperar}>
							{LavelType.RECUPERAR}
						</Button>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={close}>{LavelType.CANCELAR}</Button>
					<Button onClick={openRegister}>{LavelType.REGISTRARME}</Button>
					<Button variant='contained' color='primary' onClick={iniciarSesion}>
						{LavelType.LOGIN}
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
};

export default Login;
