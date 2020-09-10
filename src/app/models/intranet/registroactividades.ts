export class Registroactividades{
    constructor (
    	public fecha,
    	public id_user: number,        
        public tipo_actividad: number,
        public hora: number,
        public descripcion: string,
    ){}
}