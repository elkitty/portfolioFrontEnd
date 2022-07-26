export class Skills {
  id: number;
  nombreSk: string;
  fotoSk: string;
  porcentaje: number;


  constructor(id: number, nombreSk: string, fotoSk: string, porcentajeSk: number) {
    this.id = id;
    this.nombreSk = nombreSk;
    this.fotoSk = fotoSk;
    this.porcentaje = porcentajeSk;
  }
}
