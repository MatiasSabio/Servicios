import { AgregarFacturas } from "@/Components";
import { LavelType, MensajeType } from "@/Models";
import { postServicios } from "@/Redux/Slice/ServiciosSlice/serviciosSlice";
import { Button, Divider, FormLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { SelectField } from "@/Commons";
export default function AgregarServicio() {
	const dispatch = useDispatch();
	const [banderaPago, setBanderaPago] = useState(false);
	const changeBanderaPago = () => {
		setBanderaPago(!banderaPago);
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
			nombre: "",
			ultimoVencimiento: "",
			ultimoMonto: "",
			periodo: { id: "", value: "" },
			tipo: { id: "", value: "" },
			importancia: { id: "", value: "" },
			titular: { id: "", value: "" },
			compartir: { id: "", value: "" },
			facturas: [],
			observaciones: "",
			pagado: false,
			fechaDePago: "",
			numeroCliente: "",
			atencionAlCliente: "",
			emailOUsuario: "",
			contraseña: "",
		},
	});
	const tipos = [
		{ id: "1", value: "Servicio Basico" },
		{ id: "2", value: "Subscripcion" },
		{ id: "3", value: "Deporte" },
	];
	const periodos = [
		{ id: "1", value: "Diario" },
		{ id: "2", value: "Semanal" },
		{ id: "3", value: "Quincenal" },
		{ id: "4", value: "Mensual" },
		{ id: "5", value: "Bimestral" },
		{ id: "6", value: "Trimestral" },
		{ id: "7", value: "Cautrimestral" },
		{ id: "8", value: "Semestral" },
		{ id: "9", value: "Anual" },
		{ id: "10", value: "Otros" },
	];
	const importancias = [
		{ id: "1", value: "Innecesario" },
		{ id: "2", value: "Poca" },
		{ id: "3", value: "Intermedia" },
		{ id: "4", value: "Mucha" },
		{ id: "5", value: "Imprescindible" },
	];

	const titulares = [
		{ id: "1", value: "Yo" },
		{ id: "2", value: "Barby" },
		{ id: "3", value: "Compartido" },
	];
	const usuariosAgregados = [
		{ id: "1", value: "Barby" },
		{ id: "2", value: "Graciela" },
		{ id: "3", value: "Jorge" },
	];

	const submit = () => {
		let values = getValues();

		console.log(values);
		dispatch(postServicios(values));
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
				setValue={setValue}
				register={register}
				registerValue='tipo'
				errors={errors.tipo}
				lista={tipos}
				preseleccion='1'
				noShrink={true}
			/>
			<SelectField
				label={LavelType.PERIODO}
				setValue={setValue}
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
				setValue={setValue}
				registerValue='compartir'
				errors={errors.compartir}
				lista={usuariosAgregados}
				noShrink={true}
				multipleTrue={true}
			/>
			<SelectField
				label={LavelType.IMPORTANCIA}
				register={register}
				setValue={setValue}
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
				setValue={setValue}
				errors={errors.titular}
				lista={titulares}
				vacio={true}
				noShrink={true}
				preseleccion={"1"}
			/>
			<FormControlLabel
				{...register("pagado")}
				label={LavelType.PAGADO}
				onClick={() => changeBanderaPago()}
				control={<Checkbox />}
			/>
			{banderaPago && (
				<TextField
					margin='normal'
					{...register("fechaDePago")}
					label={LavelType.FECHA_DE_PAGO}
					error={Boolean(errors.fechaDePago)}
					helperText={errors.fechaDePago?.message}
					type='date'
					fullWidth
					variant='outlined'
					autoComplete='off'
				/>
			)}
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
