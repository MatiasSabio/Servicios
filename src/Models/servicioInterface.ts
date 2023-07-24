import { Factura } from "./facturaInterface";
import { Observacion } from "./ObservacionesInterface";
import { SelectItems } from "./selectItemInterface";

export interface Servicio {
	nombre: string;
	ultimoMonto: string;
	ultimoVencimiento: string;
	periodo: SelectItems;
	tipo: SelectItems;
	importancia: SelectItems;
	titular: SelectItems;
	compartir: SelectItems;
	facturas: Factura[];
	observaciones: Observacion[];
	pagado: boolean;
	fechaDePago: string;
	numeroCliente: string;
	atencionAlCliente: string;
	emailOUsuario: string;
	contraseña: string;
	id?: string;
}
