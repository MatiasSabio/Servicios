import { Factura } from "./facturaInterface";

export interface Servicio {
	nombre: string;
	ultimoVencimiento: string;
	periodo: string;
	tipo: string;
	importancia: string;
	titular: string;
	compartir: string;
	ultimoMonto: string;
	facturas: Factura[];
	observaciones: string;
	numeroCliente: string;
	atencionAlCliente: string;
	emailOUsuario: string;
	contraseña: string;
	id?: string;
}
