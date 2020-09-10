export class Consultarproyecto{
    constructor(
        public nombre: String,
      public cliente: String,
      public fecha_inicio: Date,
      public fecha_fin: Date,
      public id_proyecto: number,
    ){}
}