
export class Persona {
  id?: number;
  fullName: string;
  position: string;
  location: string;
  urlImage: string;
  about: string;


  constructor( fullName: string, position: string, location: string, urlImage: string, about: string) {
    // this.id= id;
    this.fullName = fullName;
    this.position = position;
    this.location = location;
    this.urlImage = urlImage;
    this.about = about;

  }
  // Setters
  // public setFullName(fullName: string) {
  //   this.fullName = fullName;
  // }
  // public setPosition(position: string) {
  //   this.position = position;
  // }
  // public setUbication(ubication: string) {
  //   this.ubication = ubication;
  // }
  // public setUrlImage(urlImage: string) {
  //   this.urlImage = urlImage;
  // }

  // getters
  // public getFullName() {
  //   return this.fullName;
  // }

  // public getPosition(){
  //   return this.position;
  // }

  // public getUbication(){
  //   return this.ubication;
  // }

  // public geturlImage(){
  //   return this.urlImage;
  // }
}
