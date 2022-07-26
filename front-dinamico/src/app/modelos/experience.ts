export class Experience {
  id: number;
  urlImageEx: string;
  positionEx: string;
  modeEx: string;
  startEx: number;
  endEx: number;

  constructor(id: number, urlImageEx: string, positionEx: string, modeEx: string, startEx: number, endEx: number) {
    this.id = id;
    this.urlImageEx = urlImageEx;
    this.positionEx = positionEx;
    this.modeEx = modeEx;
    this.startEx = startEx;
    this.endEx = endEx;

  }
}
