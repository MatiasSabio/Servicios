import { LavelType, loginManagerInterface } from "@/Models";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginManager } from "..";

export default function ButtonAppBar() {
	const [open, setOpen] = useState<loginManagerInterface>({
		login: false,
		register: false,
		recuperar: false,
		token: false,
		recuperarPassMessage: false,
	});
	const [loginOpen, setLoginOpen] = useState(false);
	const [sesionStorage, setSesionStorage] = useState(false);
	const iniciarSesion = () => {
		setSesionStorage(true);
	};
	const cerrarSesion = () => {
		setSesionStorage(false);
	};
	const navigate = useNavigate();
	const goHome = () => navigate("/");
	const handleLoginOpen = () => {
		setOpen({ ...open, login: true });
		setLoginOpen(true);
	};
	const handleRegisterOpen = () => {
		setOpen({ ...open, register: true });
	};

	const handleClose = () => {
		setLoginOpen(false);
	};

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='fixed'>
					<Toolbar>
						<Button color='inherit' onClick={goHome}>
							<HomeIcon />
						</Button>
						<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
							Aca va la seccion en la que estas
						</Typography>
						{sesionStorage && (
							<Button color='inherit'>
								<NotificationsIcon />
							</Button>
						)}
						{sesionStorage && (
							<Button color='inherit' onClick={cerrarSesion}>
								<AccountCircleIcon />
							</Button>
						)}
						{!sesionStorage && (
							<Button color='inherit' onClick={handleRegisterOpen}>
								{LavelType.REGISTRARME}
							</Button>
						)}
						{!sesionStorage && (
							<Button color='inherit' onClick={handleLoginOpen}>
								{LavelType.INICIAR_SESION}
							</Button>
						)}
					</Toolbar>
				</AppBar>
			</Box>
			{/* <Login open={loginOpen} close={handleClose} sesion={iniciarSesion} /> */}
			<LoginManager open={open} setOpen={setOpen} accion={iniciarSesion} />
		</>
	);
}
