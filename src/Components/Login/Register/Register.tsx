import { LavelType, loginManagerInterface, MensajeType } from "@/Models";
import {
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
	setOpen: React.Dispatch<React.SetStateAction<loginManagerInterface>>;
	close: any;
	sesion: any;
}

const Register = (params: Params) => {
	const { open, close, sesion, setOpen } = params;
	const iniciarSesion = () => {
		sesion();
		close();
	};
	const openLogin = () => {
		setOpen({ ...open, login: true, register: false });
	};
	const openToken = () => {
		setOpen({ ...open, token: true });
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
			repetir: "",
			mantenerSesionIniciada: true,
		},
	});
	return (
		<Dialog open={open.register} onClose={close}>
			<form action=''>
				<DialogTitle>{LavelType.REGISTRARME}</DialogTitle>
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
					<TextField
						margin='dense'
						{...register("repetir", { required: MensajeType.REQUERIDO })}
						label={LavelType.REPETIR}
						type='text'
						fullWidth
						variant='standard'
						error={Boolean(errors.repetir)}
						helperText={errors.repetir?.message}
						autoComplete='off'
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={close}>{LavelType.CANCELAR}</Button>
					<Button onClick={openLogin}>{LavelType.INICIAR_SESION}</Button>
					<Button variant='contained' color='primary' onClick={openToken}>
						{LavelType.REGISTRARME}
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
};

export default Register;
