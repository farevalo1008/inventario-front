export class Registraractividad{

  
    constructor (
  
        public id_periodo:number,
        public id_actividad: number,
        
        
        public nombre: String,
        
        public duracion: String,
        public observaciones: String,
        public avance: String,
        public id_proyecto: number,
        public fecha_inicio: Date,
        public fecha_fin: Date,
    ){}
  }
  