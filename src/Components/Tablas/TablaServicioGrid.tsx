import GridRow from "@/Commons/GridRow";
import { BasicCell, HeadCell } from "@/Commons";
import ColapseTable from "@/Commons/ColapseTable";
import useBandera from "@/Hooks/useBandera";
import { Servicio } from "@/Models";
import { RootState } from "@/Redux";
import { DateFunctions } from "@/Utils";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box/Box";
import TableContainer from "@/Commons/TableContainer";

interface TablaInterface {
	head: String[];
	actions?: any;
	reduxService?: any;
	backService?: any;
}

function Row(props: Servicio) {
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
	} = props;
	const { order, dateDifference, periodoDifference } = DateFunctions;
	const { bandera: general, setChange: setChangeGeneral } = useBandera();
	const { bandera: ocultos, setChange: setChangeOcultos } = useBandera();
	const fecha = DateFunctions.order(ultimoVencimiento);
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
		<GridRow colSpan='full' colsNum='8' className='bg-black'>
			<GridRow colSpan='full' colsNum='8'>
				<TableCell>
					<IconButton size='small' onClick={() => setChangeOcultos()}>
						{ocultos ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<HeadCell name='Datos Ocultos' />
			</GridRow>
			<GridRow colSpan='full' colsNum='8'>
				<ColapseTable
					bandera={ocultos}
					body={bodyOcultos}
					heads={headsOcultos}
				/>
			</GridRow>
		</GridRow>
	);

	const borderLeftConditional = () => {
		let color = "border-l-slate-500";
		const conditionRed =
			!pagado && dateDifference(order(ultimoVencimiento)) < 3;
		const conditionOrange =
			periodoDifference(order(fechaDePago), periodo.value) < 3;
		const conditionYellow =
			pagado && periodoDifference(order(ultimoVencimiento), periodo.value) < 3;
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
		let color = "success";
		const conditionOrange =
			periodoDifference(order(fechaDePago), periodo.value) < 3 ||
			(pagado &&
				periodoDifference(order(ultimoVencimiento), periodo.value) < 3);
		if (conditionOrange) {
			color = "warning";
		}
		return color;
	};

	return (
		<React.Fragment>
			<GridRow colsNum={"8"} className={borderLeftConditional()}>
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
						<Button color={"error"}>
							No <EditIcon />
						</Button>
					</TableCell>
				)}
				<Box className='grid grid-cols-3 justify-start '>
					<Button>
						<ArchiveIcon color={"disabled"} />
					</Button>
					<Button>
						<EditIcon color={"inherit"} />
					</Button>
					<Button>
						<DeleteForeverIcon color={"error"} />
					</Button>
				</Box>
			</GridRow>
			<GridRow colsNum='8' className={"bg-slate-100 grid grid-cols-7"}>
				<ColapseTable
					bandera={general}
					body={bodyGeneral}
					heads={headsGeneral}
					children={childrenGeneral}
				/>
			</GridRow>
		</React.Fragment>
	);
}

function rows() {
	const state = useSelector((state: RootState) => state.servicios);
	return state.servicios;
}
// props: TablaInterface
export default function TablaServicosGrid(props: TablaInterface) {
	const { head, actions, backService, reduxService } = props;
	return (
		<TableContainer>
			<GridRow colSpan={"full"} colsNum={"10"} className={" bg-yellow-300"}>
				<TableCell className='col-start-1' />
				{head.map((name, i) => (
					<HeadCell name={name} key={i} style={` bg-red-700`} />
				))}
			</GridRow>
			{/* {rows().map((servicio) => Row(servicio))} */}
		</TableContainer>
	);
}
