import {
	Button,
	FormControl,
	IconButton,
	TextField,
	Tooltip,
} from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
interface Props {
	register: any;
	registerValue: string;
	inhabilitado?: Boolean | undefined;
}

const AgregarFacturas = ({ register, registerValue, inhabilitado }: Props) => {
	return (
		<Box className='flex'>
			<Button>
				<TextField
					InputLabelProps={{
						shrink: true,
					}}
					label='Mes <---------------> Año'
					type='month'
					className='hidden'
				/>
			</Button>
			<TextField name='add' type='file' className='bg-black' />

			<Tooltip title='Agregar'>
				<IconButton>
					<AddIcon />
				</IconButton>
			</Tooltip>
		</Box>
	);
};

export default AgregarFacturas;
