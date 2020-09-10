export class Articulo{
    constructor (        
        //public cod_soaint: string,
        public id_clas_art : number,
        public id_tipo_articulo: number,
        public id_status : number,
        public marca: string,
        public modelo: string,
        public serial: string,
        public caracteristicas: string,
        public descripcion: string,
        public accion: string,
        public color: string,
        public costo:number,
        public fechaborrado:Date,
        
    ){}
}