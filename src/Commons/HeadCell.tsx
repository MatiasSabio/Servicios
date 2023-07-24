import { GenerateId } from "@/Utils";
import { Box } from "@mui/material";
import TableCell from "@mui/material/TableCell";
interface Props {
	name: string | String;
	key?: string | number;
	style?: string;
}
export const HeadCell = (props: Props) => {
	const { name, key, style } = props;
	return (
		<TableCell>
			<p
				className={`font-semibold text-left text-xs ${style}`}
				key={key ? key : GenerateId()}
			>
				{name}
			</p>
		</TableCell>
	);
};
