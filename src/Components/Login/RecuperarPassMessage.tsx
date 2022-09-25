import { LavelType, loginManagerInterface } from "@/Models";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";

interface Params {
	open: loginManagerInterface;
	setOpen: any;
	close: any;
	sesion: any;
}
const RecuperarPassMessage = (params: Params) => {
	const { open, close, sesion, setOpen } = params;

	return (
		<Dialog open={open.recuperarPassMessage} onClose={close}>
			<DialogTitle>{"Nueva Contraseña"}</DialogTitle>
			<DialogContent>
				<DialogContentText>
					{
						"Se enviara tu nueva contraseña a EMAIL-USUARIO. Utilicela para igresar y luego cambiela en configuracion de usuario"
					}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<DialogContentText sx={{ marginRight: 2 }}>
					{"* verificar la carpeta de spam"}
				</DialogContentText>
				<Button variant='contained' onClick={close}>
					{LavelType.CONFIRMAR}
				</Button>
			</DialogActions>
		</Dialog>
	);
};
export default RecuperarPassMessage;
