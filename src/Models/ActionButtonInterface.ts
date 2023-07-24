import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { colorEmui } from "./enum";

export interface AccionButton {
	Icono: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
		muiName: string;
	};
	action: any;
	param?: any;
	color?: colorEmui;
}
