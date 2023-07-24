import { Box } from "@mui/system";

interface Props {
	children: any;
	colsNum: string;
	colSpan?: string;
	className?: string;
}

function GridRow(props: Props) {
	const { children, colSpan, colsNum, className } = props;
	const style = `col-span-${colSpan} grid grid-cols-${colsNum} grid-rows-auto  ${className}  `;
	//grid grid-cols-${cols} grid-row-1
	return <Box className={style}>{children}</Box>;
}

export default GridRow;
