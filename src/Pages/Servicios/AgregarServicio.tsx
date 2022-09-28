import {
	Button,
	Checkbox,
	Divider,
	FormControl,
	FormControlLabel,
	FormLabel,
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
import { AgregarFacturas, SelectField } from "@/Commons";
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
			contraseña: "",
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
			className='col-start-3 col-span-10 px-5 mt-20 h-4/5 grid grid-cols-4 gap-2 grid-rows-8  '
		>
			<TextField
				margin='normal'
				{...register("nombre", {
					required: MensajeType.REQUERIDO,
				})}
				label={LavelType.NOMBRE}
				type='text'
				fullWidth
				variant='outlined'
				error={Boolean(errors.nombre)}
				helperText={errors.nombre?.message}
				autoComplete='off'
				autoFocus={true}
				className='m-0 p-0'
			/>
			<TextField
				margin='normal'
				{...register("ultimoMonto", {
					required: MensajeType.REQUERIDO,
				})}
				label={LavelType.ULTIMO_MONTO}
				error={Boolean(errors.ultimoMonto)}
				helperText={errors.ultimoMonto?.message}
				type='text'
				fullWidth
				variant='outlined'
				autoComplete='off'
			/>
			<TextField
				margin='normal'
				{...register("ultimoVencimiento", {
					required: MensajeType.REQUERIDO,
				})}
				label={LavelType.ULTIMO_VENCIMIENTO}
				error={Boolean(errors.ultimoVencimiento)}
				helperText={errors.ultimoVencimiento?.message}
				type='text'
				fullWidth
				variant='outlined'
				autoComplete='off'
			/>
			<SelectField
				label={LavelType.TIPO}
				register={register}
				registerValue='tipo'
				errors={errors.tipo}
				lista={tipos}
				vacio={true}
				noShrink={true}
				multipleTrue={true}
			/>
			<SelectField
				label={LavelType.COMPARTIR}
				register={register}
				registerValue='compartir'
				errors={errors.compartir}
				lista={usuariosAgregados}
				vacio={true}
				noShrink={true}
				multipleTrue={true}
			/>

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
			<SelectField
				label={LavelType.TITULAR}
				register={register}
				registerValue='titular'
				errors={errors.titular}
				lista={titulares}
				vacio={true}
				noShrink={true}
			/>
			<Divider variant='middle' className='col-span-full self-center ' />
			<AgregarFacturas register={register} registerValue={"facturas"} />
			<Button variant='outlined'>Agregar accion y observacion</Button>
			<Box className='col-span-full grid grid-cols-10'>
				<FormLabel className='self-center col-span-2'>Datos Ocultos</FormLabel>
				<Divider className='self-center col-span-7' />
			</Box>
			<TextField
				margin='normal'
				{...register("numeroCliente", {
					required: MensajeType.REQUERIDO,
				})}
				label={LavelType.NUMERO_DE_CLIENTE}
				error={Boolean(errors.numeroCliente)}
				helperText={errors.numeroCliente?.message}
				type='text'
				fullWidth
				variant='outlined'
				autoComplete='off'
			/>
			<TextField
				margin='normal'
				{...register("atencionAlCliente", {
					required: MensajeType.REQUERIDO,
				})}
				label={LavelType.ATENCION_AL_CLIENTE}
				error={Boolean(errors.atencionAlCliente)}
				helperText={errors.atencionAlCliente?.message}
				type='text'
				fullWidth
				variant='outlined'
				autoComplete='off'
			/>
			<TextField
				margin='normal'
				{...register("emailOUsuario", {
					required: MensajeType.REQUERIDO,
				})}
				label={LavelType.EMAIL_O_USUARIO}
				error={Boolean(errors.emailOUsuario)}
				helperText={errors.emailOUsuario?.message}
				type='text'
				fullWidth
				variant='outlined'
				autoComplete='off'
			/>
			<TextField
				margin='normal'
				{...register("contraseña", {
					required: MensajeType.REQUERIDO,
				})}
				label={LavelType.CONTRASEÑA}
				error={Boolean(errors.contraseña)}
				helperText={errors.contraseña?.message}
				type='text'
				fullWidth
				variant='outlined'
				autoComplete='off'
			/>

			<Button
				variant='contained'
				fullWidth={true}
				color='primary'
				type='submit'
				className='col-span-full '
				onClick={() => handleSubmit(submit)}
			>
				Agregar Servicio
			</Button>
		</form>
	);
}
