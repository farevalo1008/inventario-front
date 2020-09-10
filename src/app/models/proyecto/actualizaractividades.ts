export class Actualizaractividades{
    
     
       constructor (
     
        
           public id_actividad: number,
           public nombre: String,
           public duracion: String,
           public observaciones: String,
           public avance: String,
           public id_proyecto:number,
           public id_periodo: number,
           public fecha_inicio,
           public fecha_fin,
           
          
       ){}
     }
     