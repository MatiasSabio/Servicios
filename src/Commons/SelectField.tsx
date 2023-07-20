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
	setValue: any;
	multipleTrue?: Boolean;
	inhabilitado?: Boolean | undefined;
	action?: any;
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
	action,
	setValue,
	vacio,
	className,
	preseleccion,
	noShrink,
}: Props) => {
	const onSelect = (registerValue: string, value: SelectItems) => {
		setValue(registerValue, value);
	};
	const itemNinguna = { id: "", value: "" };
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
				// {...register(registerValue, {
				// 	required: MensajeType.REQUERIDO,
				// })}
				error={Boolean(errors)}
			>
				<MenuItem
					key={GenerateId()}
					onClick={() => onSelect(registerValue, itemNinguna)}
					value={""}
				>
					{MensajeType.NINGUNA}
				</MenuItem>
				{lista.map((t: SelectItems) => (
					<MenuItem
						key={GenerateId()}
						onInput={() => onSelect(registerValue, t)}
						onClick={() => onSelect(registerValue, t)}
						value={t.id}
					>
						{t.value}
					</MenuItem>
				))}
			</Select>
			{Boolean(errors) && (
				<FormHelperText>{MensajeType.REQUERIDO}</FormHelperText>
			)}
		</FormControl>
	);
};
