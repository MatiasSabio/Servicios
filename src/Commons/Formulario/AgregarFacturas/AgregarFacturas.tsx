import { Button, Chip, Divider, FormLabel } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import PopUpAgregarArchivo from "./PopUpAgregarArchivo";
interface Props {
	register: any;
	registerValue: string;
	errors: any;
}

const AgregarFacturas = ({ register, registerValue, errors }: Props) => {
	const [facturas, setFacturas] = useState<Array<any>>([]);
	const [bandera, setBandera] = useState(false);
	const open = () => {
		setBandera(true);
	};
	const close = () => {
		setBandera(false);
	};
	const onClose = (factura: any) => {
		console.log({ factura });

		setFacturas((facturas) => {
			if (facturas) {
				return [...facturas, factura];
			} else {
				return [factura];
			}
		});
		close();
	};

	const Grilla = () => {
		if (facturas.length > 0) {
			return (
				<>
					<Button onClick={() => open()} variant='outlined'>
						Agregar Factura o Documentos
					</Button>
					<Box className='w-72 overflow-y-auto grid grid-cols-2 gap-2'>
						{facturas.map((factura, i) => (
							<Chip
								label={`${factura.fecha}-${factura.nombre}`}
								variant='outlined'
								key={i}
							/>
						))}
					</Box>
				</>
			);
		} else {
			return (
				<Button onClick={() => open()} variant='outlined'>
					Agregar Factura o Archivo
				</Button>
			);
		}
	};
	return (
		<>
			<Box className='col-span-full grid grid-cols-10'>
				<FormLabel className='self-center col-span-2'>
					Facturas o Documentos
				</FormLabel>
				<Divider className='self-center col-span-7' />
			</Box>
			<Grilla />
			<PopUpAgregarArchivo onClose={onClose} open={bandera} close={close} />
		</>
	);

	// const meses = [
	// 	{ id: "1", valor: "Enero" },
	// 	{ id: "2", valor: "Febrero" },
	// 	{ id: "3", valor: "Marzo" },
	// 	{ id: "4", valor: "Abril" },
	// 	{ id: "5", valor: "Mayo" },
	// 	{ id: "6", valor: "Junio" },
	// 	{ id: "7", valor: "Julio" },
	// 	{ id: "8", valor: "Agosto" },
	// 	{ id: "9", valor: "Septiembre" },
	// 	{ id: "10", valor: "Octubre" },
	// 	{ id: "11", valor: "Noviembre" },
	// 	{ id: "12", valor: "Diciembre" },
	// ];
	// const años = [
	// 	{ id: "1", valor: "2026" },
	// 	{ id: "2", valor: "2025" },
	// 	{ id: "3", valor: "2024" },
	// 	{ id: "4", valor: "2023" },
	// 	{ id: "5", valor: "2022" },
	// 	{ id: "6", valor: "2021" },
	// 	{ id: "7", valor: "2020" },
	// 	{ id: "8", valor: "2019" },
	// 	{ id: "9", valor: "2018" },
	// 	{ id: "10", valor: "2017" },
	// 	{ id: "11", valor: "2016" },
	// 	{ id: "12", valor: "2015" },
	// 	{ id: "13", valor: "2014" },
	// 	{ id: "14", valor: "2013" },
	// 	{ id: "15", valor: "2012" },
	// 	{ id: "16", valor: "2011" },
	// 	{ id: "17", valor: "2010" },
	// 	{ id: "18", valor: "2009" },
	// 	{ id: "19", valor: "2008" },
	// 	{ id: "20", valor: "2007" },
	// 	{ id: "21", valor: "2006" },
	// 	{ id: "22", valor: "2005" },
	// 	{ id: "23", valor: "2004" },
	// 	{ id: "24", valor: "2003" },
	// 	{ id: "25", valor: "2002" },
	// 	{ id: "26", valor: "2001" },
	// 	{ id: "27", valor: "2000" },
	// 	{ id: "28", valor: "1999" },
	// 	{ id: "29", valor: "1998" },
	// 	{ id: "30", valor: "1997" },
	// 	{ id: "31", valor: "1996" },
	// ];

	// return (
	// 	<Box className='flex gap-2'>
	// 		{/* <TextField
	// 			InputLabelProps={{
	// 				shrink: true,
	// 			}}
	// 			label='Mes <---------------> Año'
	// 			type='date'
	// 			className='hidden'
	// 		/> */}
	// 		<SelectField
	// 			label={LavelType.MES}
	// 			register={register}
	// 			registerValue='mes'
	// 			lista={meses}
	// 			vacio={true}
	// 			noShrink={true}
	// 			errors={errors.mes}
	// 		/>
	// 		<SelectField
	// 			label={LavelType.AÑO}
	// 			register={register}
	// 			registerValue='año'
	// 			lista={años}
	// 			vacio={true}
	// 			noShrink={true}
	// 			errors={errors.año}
	// 		/>

	// 		<label htmlFor='upload-file' className='self-end'>
	// 			<TextField
	// 				style={{ display: "none" }}
	// 				id='upload-file'
	// 				type='file'
	// 				{...register("facturas")}
	// 			/>
	// 			<Tooltip title='Adjuntar Archivo'>
	// 				<Button>{<AttachFileIcon />}</Button>
	// 			</Tooltip>

	// 			<Tooltip title='Agregar'>
	// 				<IconButton>
	// 					<AddIcon />
	// 				</IconButton>
	// 			</Tooltip>
	// 		</label>
	// 	</Box>
	// );
};

export default AgregarFacturas;
