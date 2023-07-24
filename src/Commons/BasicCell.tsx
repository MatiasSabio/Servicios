import { GenerateId } from "@/Utils";
import { Box } from "@mui/material";
import TableCell from "@mui/material/TableCell";
interface Props {
	name: string | String;
	key?: string | number;
	style?: string;
}
export const BasicCell = (props: Props) => {
	const { name, key, style } = props;
	return (
		<TableCell className={style}>
			<p className='nombre text-xs' key={key ? key : GenerateId()}>
				{name}
			</p>
		</TableCell>
	);
};
