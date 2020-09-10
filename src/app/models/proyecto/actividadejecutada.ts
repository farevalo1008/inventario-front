export class Actividadejecutada{
    constructor (
  
        public id_actividad:number,
        public fecha_inicio_real: Date,
        public fecha_fin_real: String,
        public turno_real: number,
        public duracion_de_ejecucion: String,
        public avance: String,
        public observaciones: String,
        public id_actividad_ejec: number,
        public id_datpers: number,
        public id_turno,
    ){}
  }
  