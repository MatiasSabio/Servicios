import { BasicCell, HeadCell } from "@/Commons";
import ColapseTable from "@/Commons/ColapseTable";
import CreateAccionButton from "@/Commons/CreateAccionButton";
import useBandera from "@/Hooks/useBandera";
import { AccionButton, reduxEnum, Servicio } from "@/Models";
import { colorEmui } from "@/Models/enum/colorEmui";
import { RootState } from "@/Redux";
import { DateFunctions } from "@/Utils";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface TablaInterface {
	head: String[];
	redux: Servicio[];
	actions: AccionButton[];
	backService?: any;
}
interface RowInterface {
	servicio: Servicio;
	actions: AccionButton[];
}

function Row(props: RowInterface) {
	const {
		nombre,
		ultimoVencimiento,
		periodo,
		tipo,
		importancia,
		titular,
		compartir,
		ultimoMonto,
		facturas,
		observaciones,
		pagado,
		fechaDePago,
		numeroCliente,
		atencionAlCliente,
		emailOUsuario,
		contraseña,
	} = props.servicio;
	const actions = props.actions;

	const { order, dateDifference, periodoDifference } = DateFunctions;
	const { bandera: general, setChange: setChangeGeneral } = useBandera();
	const { bandera: ocultos, setChange: setChangeOcultos } = useBandera();

	const headsOcultos = [
		"Numero de Cliente",
		"Atencion Al Cliente",
		"Email o Usuario",
		"Contraseña",
	];
	const bodyOcultos = [
		numeroCliente,
		atencionAlCliente,
		emailOUsuario,
		contraseña,
	];

	const headsGeneral = [
		"Periodo",
		"Tipo",
		"Importancia",
		"Titular",
		"Compartir",
	];
	const bodyGeneral = [periodo, tipo, importancia, titular, compartir];

	const childrenGeneral = (
		<>
			<TableRow>
				<TableCell>
					<IconButton size='small' onClick={() => setChangeOcultos()}>
						{ocultos ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<HeadCell name='Datos Ocultos' />
			</TableRow>
			<TableRow>
				<TableCell />
				<ColapseTable
					bandera={ocultos}
					body={bodyOcultos}
					heads={headsOcultos}
				/>
			</TableRow>
		</>
	);

	const borderLeftConditional = () => {
		let color = "border-l-slate-500";
		const conditionRed =
			!pagado && dateDifference(order(ultimoVencimiento)) < 3;
		const conditionOrange =
			periodoDifference(order(fechaDePago), periodo.value) < 3;
		const conditionYellow =
			(pagado &&
				periodoDifference(order(ultimoVencimiento), periodo.value) < 3) ||
			(!pagado && !ultimoVencimiento);
		const conditionGreen = !conditionRed && !conditionOrange;

		if (conditionGreen) {
			color = "border-l-green-600";
		}
		if (conditionYellow) {
			color = "border-l-yellow-200";
		}
		if (conditionOrange) {
			color = "border-l-orange-300";
		}
		if (conditionRed) {
			color = "border-l-red-600";
		}
		return `border-l-4 ${color}`;
	};
	const colorPagoButton = () => {
		let color = colorEmui.SUCCESS;
		const conditionOrange =
			periodoDifference(order(fechaDePago), periodo.value) < 3 ||
			(pagado &&
				periodoDifference(order(ultimoVencimiento), periodo.value) < 3);
		if (conditionOrange) {
			color = colorEmui.WARNING;
		}
		return color;
	};

	return (
		<Fragment>
			<TableRow className={borderLeftConditional()}>
				<TableCell>
					<IconButton
						aria-label='expand row'
						size='small'
						onClick={() => setChangeGeneral()}
					>
						{general ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<BasicCell name={nombre} />
				<BasicCell name={order(ultimoVencimiento)} />
				<BasicCell name={ultimoMonto} />
				<TableCell>
					{facturas.length}
					<RemoveRedEyeIcon />
				</TableCell>
				<TableCell>
					{observaciones.length} <RemoveRedEyeIcon />
				</TableCell>
				{pagado ? (
					fechaDePago ? (
						<TableCell>
							<Button color={colorPagoButton()}>
								{order(fechaDePago)}
								<EditIcon />
							</Button>
						</TableCell>
					) : (
						<TableCell>
							<Button color={colorPagoButton()}>
								Si
								<EditIcon />
							</Button>
						</TableCell>
					)
				) : (
					<TableCell>
						<Button color={colorEmui.ERROR}>
							No <EditIcon />
						</Button>
					</TableCell>
				)}
				<Box>
					{actions?.map((action: AccionButton) => {
						const params = {
							Icono: action.Icono,
							action: action.action,
							param: props.servicio,
							color: action.color,
						};
						return CreateAccionButton(params);
					})}
				</Box>
				{/* <Box className='grid grid-cols-3 justify-start '>
					<Button>
						<ArchiveIcon color={"disabled"} />
					</Button>
					<Button>
						<SettingsIcon color={"inherit"} />
					</Button>
					<Button>
						<DeleteForeverIcon color={"error"} />
					</Button>
				</Box> */}
			</TableRow>
			<TableRow className={"bg-slate-100 "}>
				<ColapseTable
					bandera={general}
					body={bodyGeneral}
					heads={headsGeneral}
					children={childrenGeneral}
				/>
			</TableRow>
		</Fragment>
	);
}

// function rows() {
// 	const state = useSelector((state: RootState) => state.servicios);
// 	return state.servicios;
// }
// props: TablaInterface

export default function TablaServicos(props: TablaInterface) {
	const { head, actions, backService, redux } = props;
	// const [serviciosRows, setServiciosRows] = useState<Servicio[]>([]);
	// const [archivadosRows, setArchivadosRows] = useState<Servicio[]>([]);

	// // setServiciosArray([...servicios]);
	// useEffect(() => {
	// 	setServiciosRows(
	// 		useSelector((state: RootState) => state.servicios).serviciosArray
	// 	);
	// 	setArchivadosRows(
	// 		useSelector((state: RootState) => state.archivados).archivadosArray
	// 	);

	// 	if (redux === "servicios") {
	// 		servicios = useSelector((state: RootState) => state.servicios);
	// 		console.log(servicios);
	// 	}
	// 	if (redux === "archivados") {
	// 		servicios = useSelector((state: RootState) => state.archivados);
	// 		console.log(servicios);
	// 	}
	// 	// 	// backService
	// 	// 	// setServiciosArray(backService);
	// }, []);

	return (
		<TableContainer component={Paper}>
			<Table size='small' aria-label='collapsible table'>
				<TableHead>
					<TableRow>
						<TableCell />
						{head.map((name, i) => (
							<HeadCell name={name} key={i} />
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{/* {redux === reduxEnum.SERVICIOS */}
					{redux?.map((servicio) => Row({ servicio, actions }))}
					{/* : archivadosRows?.map((servicio) => Row({ servicio, actions }))} */}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
