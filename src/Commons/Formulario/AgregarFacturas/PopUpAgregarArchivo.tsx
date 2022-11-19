import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { SimpleDialogProps } from "../PopUpSelect/PopUpSelect";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Box, Tooltip } from "@mui/material";
import { useForm } from "react-hook-form";
import { LavelType } from "@/Models";
import { SelectField } from "../SelectField";
import Factura from "@/Models/facturaInterface";

interface Props {
	onClose: any;
	open: boolean;
	close: any;
}

export default function PopUpAgregarArchivo(props: Props) {
	const { onClose, open, close } = props;
	const [factura, setFactura] = React.useState<Factura>({
		nombre: "",
		month: "",
		year: "",
		documento: "",
	});
	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			nombre: "",
			month: "",
			year: "",
			documento: "",
		},
	});
	const handleClose = () => {
		onClose(getValues());
		reset();
	};
	const months = [
		{ id: "1", valor: "Enero" },
		{ id: "2", valor: "Febrero" },
		{ id: "3", valor: "Marzo" },
		{ id: "4", valor: "Abril" },
		{ id: "5", valor: "Mayo" },
		{ id: "6", valor: "Junio" },
		{ id: "7", valor: "Julio" },
		{ id: "8", valor: "Agosto" },
		{ id: "9", valor: "Septiembre" },
		{ id: "10", valor: "Octubre" },
		{ id: "11", valor: "Noviembre" },
		{ id: "12", valor: "Diciembre" },
	];
	return (
		<Box>
			<Dialog open={open} onClose={close}>
				<DialogTitle>Facturas</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Elegi mes, año y adjunta un archivo, podes ponerle un nombre para
						buscarlo despues.
					</DialogContentText>
					<TextField
						autoFocus
						{...register("nombre")}
						margin='dense'
						id='nombre'
						label='Nombre de la Factura o Archivo'
						type='text'
						fullWidth
						variant='outlined'
					/>
					<Box className='grid grid-cols-4 gap-2 '>
						<SelectField
							label={LavelType.MES}
							register={register}
							registerValue='month'
							errors={errors.month}
							lista={months}
							vacio={true}
							noShrink={true}
							preseleccion={"1"}
							className='align-bottom'
						/>
						<TextField
							autoFocus
							{...register("year")}
							margin='dense'
							id='year'
							label={LavelType.AÑO}
							type='text'
							fullWidth
							variant='outlined'
							className='align-bottom'
						/>

						<Box className='col-start-4'>
							<label htmlFor='up-documento'>
								<TextField
									style={{ display: "none" }}
									id='up-documento'
									{...register("documento")}
									type='file'
									fullWidth
								/>
								<Tooltip title='Adjuntar Archivo'>
									<Button
										component='span'
										variant='outlined'
										fullWidth
										className='top-px h-full '
									>
										{<AttachFileIcon />}
									</Button>
								</Tooltip>
							</label>
						</Box>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={close}>Cancelar</Button>
					<Button onClick={handleClose}>Agregar</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
}
