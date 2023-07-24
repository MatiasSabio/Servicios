import { BasicCell, HeadCell } from "@/Commons";
import { SelectItems } from "@/Models";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { stringify } from "uuid";
interface Props {
	bandera: boolean;
	heads: string[];
	body: string[] | SelectItems[];
	children?: any;
}

const ColapseTable = (props: Props) => {
	const { bandera, heads, body, children } = props;
	const estandarColumns = 6;
	const indexConditional = (array: string[] | SelectItems[]) => {
		if (array.length > estandarColumns) {
			return array.length;
		} else return estandarColumns;
	};
	const extraTableCells = (num: number) => {
		for (let i = 0; i < num; i++) {
			return <TableCell />;
		}
	};
	const mapHeads = (array: string[]) => {
		const difColumn = estandarColumns - array.length;
		let headsMapeadas = array.map((item: string, i: number) => (
			<HeadCell name={array[i]} key={i} />
		));
		if (difColumn < 1) {
			return (
				<TableRow>
					<TableCell />
					{headsMapeadas}
				</TableRow>
			);
		} else {
			return (
				<TableRow>
					<TableCell />
					{headsMapeadas}
					{extraTableCells(difColumn)}
				</TableRow>
			);
		}
	};

	const mapBody = (array: string[] | SelectItems[]) => {
		const difColumn = estandarColumns - array.length;
		let bodyMapeado = null;
		if (typeof array[0] === "string") {
			bodyMapeado = array.map((item: string, i: number) => (
				<BasicCell name={array[i]} key={i} />
			));
		} else {
			bodyMapeado = array.map((item: string, i: number) => (
				<BasicCell name={array[i].value} key={i.id} />
			));
		}
		if (difColumn < 1) {
			return (
				<TableRow>
					<TableCell />
					{bodyMapeado}
				</TableRow>
			);
		} else {
			return (
				<TableRow>
					<TableCell />
					{bodyMapeado}
					{extraTableCells(difColumn)}
				</TableRow>
			);
		}
	};
	return (
		<TableCell style={{ padding: 0 }} colSpan={8}>
			<Collapse in={bandera} timeout='auto' unmountOnExit>
				<Table size='small' aria-label='purchases'>
					<TableHead>{mapHeads(heads)}</TableHead>
					<TableBody>
						{mapBody(body)}
						{children}
					</TableBody>
				</Table>
			</Collapse>
		</TableCell>
	);
};

export default ColapseTable;
