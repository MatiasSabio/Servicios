import CreateAccionButton from "@/Commons/CreateAccionButton";
import TablaServicos from "@/Components/Tablas/TablaServicio";
import { RootState } from "@/Redux";
import { useSelector } from "react-redux";
import ArchiveIcon from "@mui/icons-material/Archive";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { AccionButton, colorEmui, reduxEnum, Servicio } from "@/Models";
import useArchivar from "@/Hooks/useArchivar";
import { Box } from "@mui/material";

const ServiciosArchivados = () => {
	// const { recuperarServicio } = useArchivar();
	const head = [
		"Nombre",
		"Ultimo Vencimiento",
		"Monto",
		"Documentos",
		"Observaciones",
		"Pagado",
		"Acciones",
	];
	const recuperarServicioAction = (servicio: Servicio) => {
		console.log("ServicioArch", servicio);

		// recuperarServicio(servicio);
	};
	const configServicio = (servicio: Servicio) => {
		console.log(servicio.nombre);
	};
	const deleteServicio = (servicio: any) => {
		console.log(servicio.nombre);
	};

	const actions: AccionButton[] = [
		{
			Icono: ArchiveIcon,
			action: recuperarServicioAction,
			color: colorEmui.DISABLED,
		},
		{ Icono: SettingsIcon, action: configServicio, color: colorEmui.PRIMARY },
		{
			Icono: DeleteForeverIcon,
			action: deleteServicio,
			color: colorEmui.ERROR,
		},
	];
	const state = useSelector((state: RootState) => state.archivados);

	return (
		<Box className='col-start-3 col-span-10 mt-20'>
			<TablaServicos
				head={head}
				redux={reduxEnum.ARCHIVADO}
				actions={actions}
			/>
		</Box>
	);
};

export default ServiciosArchivados;
