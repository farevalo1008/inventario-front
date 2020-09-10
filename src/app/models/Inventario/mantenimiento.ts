export class Mantenimiento{
    constructor (        
        public id_articulo: number,
        public cod_soaint: string,
        public clasificacion: string, 
        public tipo_articulo: string,
        public observaciones: string,
        public marca: string,
        public modelo: string,
        public serial: string,
        public costo: string,
        public status: string,
        public caracteristicas: string,
        
    ){}
}