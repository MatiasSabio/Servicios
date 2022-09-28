import { MensajeType } from "@/Models";
import {
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
} from "@mui/material";
import { GenerateId } from "../Utils";
interface Lista {
	id: string;
	valor: string;
}
interface Props {
	label: string;
	errors: any;
	register: any;
	registerValue: string;
	lista: Array<Lista>;
	multipleTrue?: Boolean;
	inhabilitado?: Boolean | undefined;
	onSelect?: any;
	vacio?: boolean;
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
	noShrink,
}: Props) => {
	return (
		<FormControl
			margin='normal'
			disabled={inhabilitado}
			error={Boolean(errors)}
		>
			<InputLabel error={Boolean(errors)} htmlFor='select-multiple-native'>
				{label}
			</InputLabel>
			<Select
				displayEmpty
				multiple={multipleTrue}
				defaultValue={[]}
				label={label}
				{...register(registerValue, {
					required: MensajeType.REQUERIDO,
				})}
				error={Boolean(errors)}
				renderValue={(selected: any) => {
					if (!vacio) {
						return (
							<em style={{ color: "rgba(0, 0, 0, 0.6)" }}>
								{MensajeType.SELECCIONA}
							</em>
						);
					}

					let turnoLista: Array<string | undefined> = [];
					if (typeof selected !== "string") {
						selected.forEach((s: any) => {
							let t = lista.find((t) => t.id === s);
							if (t !== undefined) {
								turnoLista.push(t.valor);
							}
						});
						return turnoLista.join(", ");
					} else {
						onSelect && onSelect();
						let seleccionado = lista.find((s) => s.id === selected);
						return seleccionado?.valor;
					}
				}}
				inputProps={{
					id: "select-multiple-native",
				}}
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
