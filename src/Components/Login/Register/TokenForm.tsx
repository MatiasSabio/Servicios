import { Contador } from "@/Commons";
import { LavelType, loginManagerInterface, MensajeType } from "@/Models";
import {
	Button,
	Checkbox,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	FormControlLabel,
	TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface Params {
	open: loginManagerInterface;
	setOpen: any;
	close: any;
	sesion: any;
}
const TokenForm = (params: Params) => {
	const { open, close, sesion, setOpen } = params;
	const [disableModal, setDisableModal] = useState(true);
	const iniciarSesion = () => {
		console.log("emntr");
		console.log({ sesion });
		sesion();
		setOpen({ ...open, register: false, token: false });
	};
	// const {
	//     loading: loadingValidarToken,
	//     response: responseValidarToken,
	//     error: errorCambiarEmail,
	//     http: httpCambiarEmail
	//   } = useApiHttp();

	const banderaDisableModal = (data: any) => {
		console.log(data.target.value, disableModal);
		if (data.target.value.length === 6) {
			setDisableModal(false);
		} else {
			setDisableModal(true);
		}
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
			token: "",
		},
	});
	const { playContador, cerrarContador, contador, numeroIntervalo } = Contador(
		180,
		open.token,
		close
	);
	useEffect(() => {
		if (!open.token) cerrarContador(numeroIntervalo);
		if (open.token) playContador();
	}, [open.token]);

	return (
		<Dialog open={open.token} onClose={close}>
			<form>
				<DialogTitle>{"Confirmacion De Email"}</DialogTitle>
				<DialogContent>
					<DialogContentText>
						{
							"Se enviara un token EMAIL-USUARIO. Sino no lo recibe, verificar la carpeta de spam"
						}
					</DialogContentText>
					<DialogContentText>
						{`el token expira en : ${contador}`}
					</DialogContentText>
					<TextField
						{...register("token")}
						margin='dense'
						id='name'
						label={"Token" + " *"}
						type='text'
						fullWidth
						inputProps={{ maxLength: 6 }}
						variant='standard'
						autoComplete='off'
						onChange={(val) => banderaDisableModal(val)}
						autoFocus={true}
						// error={Boolean(errorCambiarEmail)}
						helperText={"Token Invalido"}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={close}>{LavelType.CANCELAR}</Button>
					<Button
						variant='contained'
						onClick={iniciarSesion}
						disabled={disableModal}
					>
						{LavelType.CONFIRMAR}
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
};
export default TokenForm;
