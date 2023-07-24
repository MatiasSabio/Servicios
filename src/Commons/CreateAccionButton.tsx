import { AccionButton } from "@/Models";
import { colorEmui } from "@/Models/enum/colorEmui";
import { Button, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

function CreateAccionButton(params: AccionButton) {
	const { Icono, action, param, color } = params;
	return (
		<Button>
			<Icono onClick={() => action(param)} color={color} />
		</Button>
	);
}

export default CreateAccionButton;
