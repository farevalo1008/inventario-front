
export class Documentos {

  constructor (

    public nombre: string,
    public descripcion: string,
    public fecha_emision: Date,
    public fecha_entrega: Date,
    public id_extension : number,
    public ruta : string,
    public codigo : string,
    public destinatario: string,
    public origen: string,
    public id_procedencia: number,
    public id_departamento: number,
    public id_cliente: number,
    public id_tipo_doc: number,

){}
}
