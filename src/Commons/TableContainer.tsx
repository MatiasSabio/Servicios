import { Box } from "@mui/system";

interface Props {
	children: any;
	colsNum?: string;
	className?: string;
}

function TableContainer(props: Props) {
	const { children, colsNum, className } = props;
	const style = ` col-span-full grid grid-cols-${colsNum} grid-rows-  ${className}`;

	return <Box className={""}>{children}</Box>;
}

export default TableContainer;
