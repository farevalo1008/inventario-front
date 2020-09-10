export class Users{
    constructor (        
        public email : string,
        public password : string,
        public rol : number,
        public pais : number,
        public nacionalidad: number,
        public dni: number,
        public nombres: string,
        public apellidos: string,
        public fecnac: string,
        public genero: number,
        public telhab: number,
        public telmov: number,
        public image: string
    ){}
}