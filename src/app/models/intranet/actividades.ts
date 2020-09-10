export class Actividades{
    constructor (        
        public id,
        public fecha_inicio,
        public fecha_fin,
        public encargado: string,
        public titulo: string,
        public descripcion: string,
    ){}
}