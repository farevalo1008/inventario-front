export class Observaciones{
    constructor (        
        public id_candidato : number,
        public observaciones : string,
        public entrevistador : string,
        public rol : number,
        public fecha_observacion : Date
    ){}
}