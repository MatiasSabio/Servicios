import { NavBar, SideBar } from "@/Components";
import {
	AgregarServicio,
	ConfigGeneral,
	ConfigGraficas,
	ConfigUsuario,
	Cosas,
	Egresos,
	GraficasGuardadas,
	Home,
	Ingresos,
	NuevaGrafica,
	ServiciosArchivados,
	TusServicios,
} from "@/Pages";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

export const BackofficeRouter = () => {
	return (
		<Box className='grid grid-cols-12 grid-rows-1 '>
			<NavBar />
			<SideBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='servicios/tusServicios' element={<TusServicios />} />
				<Route path='servicios/archivados' element={<ServiciosArchivados />} />
				<Route path='servicios/nuevos' element={<AgregarServicio />} />
				<Route path='graficas/nueva' element={<NuevaGrafica />} />
				<Route path='graficas/guardadas' element={<GraficasGuardadas />} />
				<Route path='otro/egresos' element={<Egresos />} />
				<Route path='otro/ingresos' element={<Ingresos />} />
				<Route path='otro/cosas' element={<Cosas />} />
				<Route path='configuracion/general' element={<ConfigGeneral />} />
				<Route path='configuracion/usuario' element={<ConfigUsuario />} />
				<Route path='configuracion/graficas' element={<ConfigGraficas />} />
			</Routes>
		</Box>
	);
};
