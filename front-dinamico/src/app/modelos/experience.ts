export class Experience {
  id?: number;
  urlImageEx: string;
  positionEx: string;
  modeEx: string;
  startEx: string;
  endEx: string;

  constructor(urlImageEx: string, positionEx: string, modeEx: string, startEx: string, endEx: string) {
    this.urlImageEx = urlImageEx;
    this.positionEx = positionEx;
    this.modeEx = modeEx;
    this.startEx = startEx;
    this.endEx = endEx;

  }
}
