export class Education {
  id: number;
  schoolEd: string;
  urlImageEd: string;
  titleEd: string;
  startEd: number;
  endEd: number;

  constructor(id: number, schoolEd: string, urlImageEd: string, titleEd: string, startEd: number, endEd: number) {
    this.id = id;
    this.schoolEd = schoolEd;
    this.urlImageEd = urlImageEd;
    this.titleEd = titleEd;
    this.startEd = startEd;
    this.endEd = endEd;

  }
}
