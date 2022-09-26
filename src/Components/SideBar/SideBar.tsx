import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const navigate = useNavigate();

	const [open, setOpen] = useState<any>({
		anterior: "servicio",
		servicio: true,
		graficas: false,
		otro: false,
		configuracion: false,
	});

	const handleClick = (selected: any) => {
		setOpen({
			...open,
			[open.anterior]: false,
			anterior: selected,
			[selected]: !open[selected],
		});
	};
	const handleListItemClick = (event: any, index: number, selected: string) => {
		console.log("hola");

		navigate(`./${selected}`);
		setSelectedIndex(index);
	};
	return (
		<Box className='col-start-1 col-span-2  mt-16 h-screen  ' hidden={false}>
			<List component='nav' aria-label='main mailbox folders'>
				<ListItemButton onClick={() => handleClick("servicio")}>
					<ListItemText primary='Servicios' />
					{open.servicio ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={open.servicio} timeout='auto' unmountOnExit>
					<List component='div' disablePadding>
						<ListItemButton
							sx={{ pl: 4 }}
							selected={selectedIndex === 0}
							onClick={(event) =>
								handleListItemClick(event, 0, "servicios/tusServicios")
							}
						>
							<ListItemText primary='Tus Servicios' />
						</ListItemButton>
						<ListItemButton
							sx={{ pl: 4 }}
							selected={selectedIndex === 1}
							onClick={(event) =>
								handleListItemClick(event, 1, "servicios/archivados")
							}
						>
							<ListItemText primary='Servicios Archivados' />
						</ListItemButton>
						<ListItemButton
							sx={{ pl: 4 }}
							selected={selectedIndex === 2}
							onClick={(event) =>
								handleListItemClick(event, 2, "servicios/nuevos")
							}
						>
							<ListItemText primary='Agregar Servicios' />
						</ListItemButton>
					</List>
				</Collapse>
				<ListItemButton onClick={() => handleClick("grafica")}>
					<ListItemText primary='Graficas' />
					{open.grafica ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={open.grafica} timeout='auto' unmountOnExit>
					<List component='div' disablePadding>
						<ListItemButton
							sx={{ pl: 4 }}
							selected={selectedIndex === 3}
							onClick={(event) =>
								handleListItemClick(event, 3, "graficas/nueva")
							}
						>
							<ListItemText primary='Nueva Grafica' />
						</ListItemButton>
						<ListItemButton
							sx={{ pl: 4 }}
							selected={selectedIndex === 4}
							onClick={(event) =>
								handleListItemClick(event, 4, "graficas/guardadas")
							}
						>
							<ListItemText primary='Graficas Guardadas' />
						</ListItemButton>
					</List>
				</Collapse>
				<ListItemButton onClick={() => handleClick("otro")}>
					<ListItemText primary='Otros' />
					{open.otro ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={open.otro} timeout='auto' unmountOnExit>
					<List component='div' disablePadding>
						<ListItemButton
							sx={{ pl: 4 }}
							selected={selectedIndex === 5}
							onClick={(event) => handleListItemClick(event, 5, "otro/egresos")}
						>
							<ListItemText primary='Pagos' />
						</ListItemButton>
						<ListItemButton
							sx={{ pl: 4 }}
							selected={selectedIndex === 6}
							onClick={(event) =>
								handleListItemClick(event, 6, "otro/ingresos")
							}
						>
							<ListItemText primary='Entrada' />
						</ListItemButton>
						<ListItemButton
							sx={{ pl: 4 }}
							selected={selectedIndex === 7}
							onClick={(event) => handleListItemClick(event, 7, "otro/cosas")}
						>
							<ListItemText primary='Cosas' />
						</ListItemButton>
					</List>
				</Collapse>
				<ListItemButton onClick={() => handleClick("configuracion")}>
					<ListItemText sx={{ overflow: "hidden" }} primary='Configuraciones' />
					{/* <ListItemIcon>
						<SettingsIcon className='white ' />
					</ListItemIcon> */}
					{open.configuracion ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={open.configuracion} timeout='auto' unmountOnExit>
					<List component='div' disablePadding>
						<ListItemButton
							sx={{ pl: 4 }}
							selected={selectedIndex === 8}
							onClick={(event) =>
								handleListItemClick(event, 8, "configuracion/general")
							}
						>
							<ListItemText primary='General' />
						</ListItemButton>
						<ListItemButton
							sx={{ pl: 4 }}
							selected={selectedIndex === 9}
							onClick={(event) =>
								handleListItemClick(event, 9, "configuracion/usuario")
							}
						>
							<ListItemText primary='Usuario' />
						</ListItemButton>
						<ListItemButton
							sx={{ pl: 4 }}
							selected={selectedIndex === 10}
							onClick={(event) =>
								handleListItemClick(event, 10, "configuracion/graficas")
							}
						>
							<ListItemText primary='Graficas' />
						</ListItemButton>
					</List>
				</Collapse>
			</List>
		</Box>
	);
}
