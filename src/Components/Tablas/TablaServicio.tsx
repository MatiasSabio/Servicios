import useBandera from "@/Hooks/useBandera";
import { Servicio } from "@/Models";
import { RootState, useAppSelector } from "@/Redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon/Icon";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useSelector } from "react-redux";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import Button from "@mui/material/Button";

interface TablaInterface {
	head: String[];
	actions?: any;
	reduxService?: any;
	backService?: any;
}
function createData(
	name: string,
	calories: number,
	fat: number,
	carbs: number,
	protein: number,
	price: number
) {
	return {
		name,
		calories,
		fat,
		carbs,
		protein,
		price,
		history: [
			{
				date: "2020-01-05",
				customerId: "11091700",
				amount: 3,
			},
			{
				date: "2020-01-02",
				customerId: "Anonymous",
				amount: 1,
			},
		],
	};
}

// async function createData(params: any) {

// }
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
	//   const [open, setOpen] = React.useState(false);
	const { bandera: open, setChange: setOpen } = useBandera();
	return (
		<React.Fragment>
			<TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
				<TableCell>
					<IconButton
						aria-label='expand row'
						size='small'
						onClick={() => setOpen()}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell>{nombre}</TableCell>
				<TableCell>{ultimoVencimiento}</TableCell>
				<TableCell>{ultimoMonto}</TableCell>
				<TableCell>{periodo.value}</TableCell>
				<TableCell>{tipo.value}</TableCell>
				<TableCell>{importancia.value}</TableCell>
				<TableCell>{titular.value}</TableCell>
				<TableCell>{compartir.value}</TableCell>
				<TableCell>
					{facturas.length}
					<RemoveRedEyeIcon />
				</TableCell>
				<TableCell>
					{observaciones.length} <RemoveRedEyeIcon />
				</TableCell>
				{pagado ? (
					<TableCell>{fechaDePago}</TableCell>
				) : (
					<Button>
						<PriceCheckIcon />
					</Button>
				)}
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					{/* numeroCliente: string;
						atencionAlCliente: string;
						emailOUsuario: string;
						contraseña: string; */}
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Table size='small' aria-label='purchases'>
								<TableHead>
									<TableRow>
										<TableCell>Numero de Cliente</TableCell>
										<TableCell>Atencion Al Cliente</TableCell>
										<TableCell>Email o Usuario</TableCell>
										<TableCell>Contraseña</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell component='th' scope='row'>
											{numeroCliente}
										</TableCell>
										<TableCell>{atencionAlCliente}</TableCell>
										<TableCell>{emailOUsuario}</TableCell>
										<TableCell>{contraseña}</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

function rows() {
	const state = useSelector((state: RootState) => state.servicios);
	return state.servicios;
}
// props: TablaInterface
export default function TablaServicos(props: TablaInterface) {
	const { head, actions, backService, reduxService } = props;
	return (
		<TableContainer component={Paper}>
			<Table aria-label='collapsible table'>
				<TableHead>
					<TableRow>
						<TableCell />
						{head.map((name, i) => (
							<TableCell key={i}>{name}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>{rows().map((servicio) => Row(servicio))}</TableBody>
			</Table>
		</TableContainer>
	);
}
