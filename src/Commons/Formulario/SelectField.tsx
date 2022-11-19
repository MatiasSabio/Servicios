import { MensajeType } from "@/Models";
import SelectItems from "@/Models/selectItemInterface";
import {
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
} from "@mui/material";
import { GenerateId } from "../Utils";

interface Props {
	label: string;
	errors: any;
	register: any;
	registerValue: string;
	lista: Array<SelectItems>;
	multipleTrue?: Boolean;
	inhabilitado?: Boolean | undefined;
	onSelect?: any;
	vacio?: boolean;
	preseleccion?: any;
	className?: string;
	noShrink?: boolean;
}

export const SelectField = ({
	label,
	errors,
	register,
	registerValue,
	lista,
	multipleTrue,
	inhabilitado,
	onSelect,
	vacio,
	className,
	preseleccion,
	noShrink,
}: Props) => {
	return (
		<FormControl
			margin='normal'
			disabled={inhabilitado}
			error={Boolean(errors)}
			className={className ? className : ""}
		>
			<InputLabel error={Boolean(errors)} htmlFor='select-multiple-native'>
				{label}
			</InputLabel>
			<Select
				displayEmpty
				multiple={multipleTrue}
				defaultValue={preseleccion ? preseleccion : []}
				label={label}
				{...register(registerValue, {
					required: MensajeType.REQUERIDO,
				})}
				error={Boolean(errors)}
			>
				<MenuItem key={GenerateId()} value={""}>
					{MensajeType.NINGUNA}
				</MenuItem>
				{lista.map((t: any) => (
					<MenuItem key={GenerateId()} value={t.id}>
						{t.valor}
					</MenuItem>
				))}
			</Select>
			{Boolean(errors) && (
				<FormHelperText>{MensajeType.REQUERIDO}</FormHelperText>
			)}
		</FormControl>
	);
};
