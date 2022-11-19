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
import SelectItems from "@/Models/selectItemInterface";

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
			periodo: "",
			tipo: "",
			importancia: "",
			titular: "",
			compartir: "",
			ultimoMonto: "",
			facturas: [],
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
	const periodos = [
		{ id: "1", valor: "Diario" },
		{ id: "2", valor: "Semanal" },
		{ id: "3", valor: "Quincenal" },
		{ id: "4", valor: "Mensual" },
		{ id: "5", valor: "Bimestral" },
		{ id: "6", valor: "Trimestral" },
		{ id: "7", valor: "Cautrimestral" },
		{ id: "8", valor: "Semestral" },
		{ id: "9", valor: "Anual" },
		{ id: "10", valor: "Otros" },
	];
	const importancias = [
		{ id: "1", valor: "Innecesario" },
		{ id: "2", valor: "Poca" },
		{ id: "3", valor: "Intermedia" },
		{ id: "4", valor: "Mucha" },
		{ id: "3", valor: "Imprescindible" },
	];

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
			<Box className='col-span-full grid grid-cols-10'>
				<FormLabel className='self-center col-span-2'>
					Datos Del Servicio
				</FormLabel>
				<Divider className='self-center col-span-7' />
			</Box>
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
				className='m-0 p-0 text-white'
				InputLabelProps={{
					sx: {
						color: "white",
						borderColor: "white, solid, 1px",
						borderStyle: "hidden",
					},
				}}
			/>
			<TextField
				margin='normal'
				{...register("ultimoMonto")}
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
				{...register("ultimoVencimiento")}
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
				preseleccion='1'
				noShrink={true}
			/>
			<SelectField
				label={LavelType.PERIODO}
				register={register}
				registerValue='periodo'
				errors={errors.periodo}
				lista={periodos}
				noShrink={true}
				preseleccion='4'
			/>
			<SelectField
				label={LavelType.COMPARTIR}
				register={register}
				registerValue='compartir'
				errors={errors.compartir}
				lista={usuariosAgregados}
				noShrink={true}
				multipleTrue={true}
			/>
			<SelectField
				label={LavelType.IMPORTANCIA}
				register={register}
				registerValue='importancia'
				errors={errors.importancia}
				lista={importancias}
				vacio={true}
				noShrink={true}
				preseleccion={"3"}
			/>

			<SelectField
				label={LavelType.TITULAR}
				register={register}
				registerValue='titular'
				errors={errors.titular}
				lista={titulares}
				vacio={true}
				noShrink={true}
				preseleccion={"1"}
			/>
			<AgregarFacturas
				register={register}
				registerValue={"facturas"}
				errors={errors}
			/>
			<Box className='col-span-full grid grid-cols-10'>
				<FormLabel className='self-center col-span-2'>
					Acciones u Observaciones
				</FormLabel>
				<Divider className='self-center col-span-7' />
			</Box>
			<Button variant='outlined'>Agregar accion y observacion</Button>
			<Box className='col-span-full grid grid-cols-10'>
				<FormLabel className='self-center col-span-2'>Datos Ocultos</FormLabel>
				<Divider className='self-center col-span-7' />
			</Box>
			<TextField
				margin='normal'
				{...register("numeroCliente")}
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
				{...register("atencionAlCliente")}
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
				{...register("emailOUsuario")}
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
				{...register("contraseña")}
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
