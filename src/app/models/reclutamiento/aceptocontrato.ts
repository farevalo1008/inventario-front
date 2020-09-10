export class Aceptocontrato{
    constructor (        
        public id_candidato,
        public id_cargo : number,
        public fecha_ingreso : Date,
        public salario : string,
        public observaciones : string
    ){}
}