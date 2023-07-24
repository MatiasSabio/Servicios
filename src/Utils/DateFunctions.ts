const DateOrder = (date: string) => {
	const dateSplit = date.split("-");
	const dateJoin = dateSplit.reverse().join("/");
	return dateJoin;
};
const GenerateDateToday = () => {
	const date = new Date().toLocaleDateString();
	return date;
};
const DateDifference = (Date: string) => {
	const Year = Date.split("/")[2];
	const Month = Date.split("/")[1];
	const Day = Date.split("/")[0];

	const dateToday = GenerateDateToday();
	const todayYear = dateToday.split("/")[2];
	const todayMonth = dateToday.split("/")[1];
	const todayDay = dateToday.split("/")[0];

	const differenceYear = parseInt(Year) - parseInt(todayYear);
	const differenceMonth = parseInt(Month) - parseInt(todayMonth);
	const differenceDay = parseInt(Day) - parseInt(todayDay);

	return differenceYear * 360 + differenceMonth * 30 + differenceDay;
};
const PeriodoDifference = (Date: string, Periodo: string) => {
	const periodos = [
		{ id: "1", value: "Diario", diffValue: 1 },
		{ id: "2", value: "Semanal", diffValue: 7 },
		{ id: "3", value: "Quincenal", diffValue: 15 },
		{ id: "4", value: "Mensual", diffValue: 30 },
		{ id: "5", value: "Bimestral", diffValue: 60 },
		{ id: "6", value: "Trimestral", diffValue: 90 },
		{ id: "7", value: "Cautrimestral", diffValue: 120 },
		{ id: "8", value: "Semestral", diffValue: 180 },
		{ id: "9", value: "Anual", diffValue: 360 },
		{ id: "10", value: "Otros", diffValue: 0 },
	];
	let periodoDiffValue = 0;
	periodos.forEach((element) => {
		if (element.value === Periodo) {
			periodoDiffValue = element.diffValue;
		}
	});
	const dateDiff = DateDifference(Date);

	return dateDiff + periodoDiffValue;
};
export const DateFunctions = {
	order: DateOrder,
	generateDateToday: GenerateDateToday,
	dateDifference: DateDifference,
	periodoDifference: PeriodoDifference,
};
