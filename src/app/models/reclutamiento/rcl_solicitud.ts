export class Rcl_Solicitud{
    constructor (
        public solicitante : string,
        public tipo_requerimiento : number,
        public area_trabajo : number,
        public cargo : number,
        public profesion: number,
        public pais: number,
        public nombres : string,
        public conocimiento: string,
        public experiencia: string,
        public otros_requisitos: string,
        public descripcion: string
    ){}
}