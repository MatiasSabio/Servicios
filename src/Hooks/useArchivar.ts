// import { Servicio } from "@/Models";
// import { RootState } from "@/Redux";
// import {
// 	deleteArchivados,
// 	editArchivados,
// 	postArchivados,
// } from "@/Redux/Slice/ArchivarServiciosSlice/archivarServiciosSlice";
// import {
// 	deleteServicio,
// 	postServicios,
// } from "@/Redux/Slice/ServiciosSlice/serviciosSlice";
// import { useDispatch, useSelector } from "react-redux";

// //faltan los services para la base de datos

const useArchivar = () => {
	// 	const dispatch = useDispatch();
	// 	const archivados = useSelector((state: RootState) => state.archivados);
	// 	const useGetServicioArchivado = () => {
	// 		return archivados;
	// 	};
	// 	const archivarServicio = (payload: Servicio) => {
	// 		dispatch(postArchivados(payload));
	// 		dispatch(deleteServicio(payload.id));
	// 	};
	// 	const recuperarServicio = (payload: Servicio) => {
	// 		dispatch(deleteArchivados(payload));
	// 		dispatch(postServicios(payload.id));
	// 	};
	// 	const useEditArchivado = (payload: Servicio) => {
	// 		dispatch(editArchivados(payload));
	// 	};
	// 	const useDeleteArchivado = (payload: Servicio) => {
	// 		dispatch(deleteArchivados(payload));
	// 	};
	// 	return {
	// 		useGetServicioArchivado,
	// 		archivarServicio,
	// 		recuperarServicio,
	// 		useEditArchivado,
	// 		useDeleteArchivado,
	// 	};
};
export default useArchivar;
