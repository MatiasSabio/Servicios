import CreateAccionButton from "@/Commons/CreateAccionButton";
import TablaServicos from "@/Components/Tablas/TablaServicio";
import { RootState } from "@/Redux";
import { useDispatch, useSelector } from "react-redux";
import ArchiveIcon from "@mui/icons-material/Archive";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { AccionButton, colorEmui, reduxEnum, Servicio } from "@/Models";
import useArchivar from "@/Hooks/useArchivar";
import { Box } from "@mui/material";
import { deleteServicio } from "@/Redux/Slice/ServiciosSlice/serviciosSlice";
import { useServicios } from "@/Hooks";
import { useEffect, useState } from "react";

const TusServicios = () => {
	const dispatch = useDispatch();
	// const { archivarServicio } = useArchivar();
	const head = [
		"Nombre",
		"Ultimo Vencimiento",
		"Monto",
		"Documentos",
		"Observaciones",
		"Pagado",
		"Acciones",
	];
	const archivarServicioAction = (servicio: Servicio) => {
		console.log("ServicioArch", servicio);

		// archivarServicio(servicio);
	};
	const configServicio = (servicio: Servicio) => {
		console.log(servicio.nombre);
	};
	const deleteServicioAction = (servicio: Servicio) => {
		console.log(servicio.nombre);
		dispatch(deleteServicio(servicio));
	};

	const actions: AccionButton[] = [
		{
			Icono: ArchiveIcon,
			action: archivarServicioAction,
			color: colorEmui.DISABLED,
		},
		{ Icono: SettingsIcon, action: configServicio, color: colorEmui.PRIMARY },
		{
			Icono: DeleteForeverIcon,
			action: deleteServicioAction,
			color: colorEmui.ERROR,
		},
	];
	const [serviciosRows, setServiciosRows] = useState<Servicio[]>([]);

	// setServiciosArray([...servicios]);
	// useEffect(() => {
	const x = useSelector((state: RootState) => state.servicios).serviciosArray;

	console.log(x);

	setServiciosRows(
		useSelector((state: RootState) => state.servicios).serviciosArray
	);
	// }, []);
	// const { useGetServicios } = useServicios();
	return (
		<Box className='col-start-3 col-span-10 mt-20'>
			<TablaServicos head={head} redux={serviciosRows} actions={actions} />
		</Box>
	);
};

export default TusServicios;
