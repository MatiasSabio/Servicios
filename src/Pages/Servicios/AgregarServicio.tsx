import {
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Rating,
	Select,
	TextField,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { LavelType, MensajeType } from "@/Models";
import { Box } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
interface SelectItems {
	id: string;
	valor: string;
}

export default function AgregarServicio() {
	const [banderaLocalidad, setBanderaLocalidad] = useState(true);
	const [listaLocalidades, setListaLocalidades] = useState<
		{ id: string; valor: string }[]
	>([]);
	const [hoverImportancia, setHoverImportancia] = useState(-1);
	const [valueImportancia, setValuesImportancia] = useState<number | null>(3);
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
			ultimoVencimiento: "",
			tipo: "",
			importancia: "3",
			titular: "",
			compartir: "",
			ultimoMonto: "",
			facturas: "",
			observaciones: "",
			numeroCliente: "",
			atencionAlCliente: "",
			emailOUsuario: "",
		},
	});
	const tipos = [
		{ id: "1", valor: "Servicio Basico" },
		{ id: "2", valor: "Subscripcion" },
		{ id: "3", valor: "Deporte" },
	];
	const importancias = [
		{ id: "1", valor: "Poca" },
		{ id: "2", valor: "Intermedia" },
		{ id: "3", valor: "Mucha" },
	];
	const labels: { [index: string]: string } = {
		1: "prescindible",
		2: "Poca",
		3: "Intermedia",
		4: "Mucha",
		5: "imprescindible",
	};
	function getLabelText(value: number) {
		return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
	}
	const changeImportancia = (newValue: any) =>
		newValue !== null && newValue?.toString();
	const titulares = [
		{ id: "1", valor: "Yo" },
		{ id: "2", valor: "Barby" },
		{ id: "3", valor: "Compartido" },
	];
	const usuariosAgregados = [
		{ id: "1", valor: "Barby" },
		{ id: "2", valor: "Graciela" },
		{ id: "3", valor: "Jorge" },
	];
	const mapMenuItem = (array: SelectItems[]) => {
		return array.map((item: SelectItems) => (
			<MenuItem value={item.id}>{item.valor}</MenuItem>
		));
	};
	const submit = () => {
		console.log("sumbit");
	};

	return (
		<form
			noValidate
			onSubmit={handleSubmit(submit)}
			className='col-start-3 col-span-10 px-3 mt-20  h-4/5 grid grid-cols-3 gap-2  '
		>
			<TextField
				margin='dense'
				{...register("nombre", {
					required: MensajeType.REQUERIDO,
				})}
				label={LavelType.NOMBRE}
				type='text'
				fullWidth
				variant='standard'
				error={Boolean(errors.nombre)}
				helperText={errors.nombre?.message}
				autoComplete='off'
				autoFocus={true}
			/>
			<TextField
				margin='dense'
				{...register("ultimoVencimiento", {
					required: MensajeType.REQUERIDO,
				})}
				label={LavelType.ULTIMO_VENCIMIENTO}
				error={Boolean(errors.ultimoVencimiento)}
				helperText={errors.ultimoVencimiento?.message}
				type='text'
				fullWidth
				variant='standard'
				autoComplete='off'
			/>
			<FormControl fullWidth>
				<InputLabel id='tipo-lavel'>{LavelType.TIPO}</InputLabel>
				<Select
					labelId='tipo-lavel'
					id='tipo-select'
					value={getValues("tipo")}
					label={LavelType.TIPO}
					onChange={(e) => setValue("tipo", e.target.value)}
				>
					{mapMenuItem(tipos)}
				</Select>
			</FormControl>
			<Box
				sx={{
					width: 200,
					display: "flex",
					alignItems: "center",
				}}
			>
				<Rating
					name='hover-feedback'
					value={parseInt(getValues("importancia"))}
					precision={1}
					getLabelText={getLabelText}
					onChange={(event, newValue) => {
						setValue("importancia", changeImportancia(newValue));
					}}
					emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
				/>
				{valueImportancia !== null && (
					<Box sx={{ ml: 2 }}>
						{
							labels[
								hoverImportancia !== -1 ? hoverImportancia : valueImportancia
							]
						}
					</Box>
				)}
			</Box>
			<FormControl fullWidth>
				<InputLabel id='titular-label'>{LavelType.TITULAR}</InputLabel>
				<Select
					labelId='titular-label'
					id='titular-select'
					value={getValues("titular")}
					label={LavelType.TITULAR}
					onChange={(e) => setValue("titular", e.target.value)}
				>
					{mapMenuItem(titulares)}
				</Select>
			</FormControl>
			<FormControlLabel
				{...register("titular")}
				control={<Checkbox />}
				label='Titular'
				style={{ color: "rgba(0, 0, 0, 0.6)" }}
			/>
			<Button
				variant='contained'
				fullWidth={true}
				color='primary'
				type='submit'
				className='col-span-full'
				onClick={() => handleSubmit(submit)}
			>
				Agregar Servicio
			</Button>
		</form>
	);
}
