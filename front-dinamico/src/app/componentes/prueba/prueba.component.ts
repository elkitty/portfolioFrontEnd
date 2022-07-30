import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
})
export class PruebaComponent implements OnInit {
  personaForm: FormGroup;
  personaList: Persona[] = [];
  persona: Persona | undefined;
  subscription: Subscription | undefined;
  // persona: Persona | undefined;

  constructor(private fBuilder: FormBuilder, private pServ: PersonaService) {
    this.personaForm = this.fBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      position: ['', [Validators.required]],
      location: ['', [Validators.required]],
      urlImage: [
        'https://',
        [Validators.required, Validators.pattern('https?://.+')],
      ],
      about: ['', [Validators.required]],
    });
  }

  // ngOnInit(): void {
  //   this.obtenerPersonas();
  //   this.pServ.obtenerDatosPersonas().subscribe((data) => {
  //     console.log(data);
  //     this.personaList = data;
  //   });
  // }

  ngOnInit(): void {
    this.obtenerPersonas();

    this.subscription = this.pServ.refres$.subscribe(() => {
      this.obtenerPersonas();
    });
  }

  obtenerPersonas(): void {
    this.pServ.obtenerDatosPersonas().subscribe({
      next: (response: Persona[]) => {
        this.personaList = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  agregarPersona(): void {
    if (this.personaForm.valid) {
      let fullName = this.personaForm.controls['fullName'].value;
      let position = this.personaForm.controls['position'].value;
      let location = this.personaForm.controls['location'].value;
      let urlImage = this.personaForm.controls['urlImage'].value;
      let about = this.personaForm.controls['about'].value;

      let persona = new Persona(fullName, position, location, urlImage, about);
      this.pServ.agregarPersona(this.personaForm.value).subscribe(
        (data: any) => {
          alert('la persona se añadió con éxito');
          console.log(persona, this.personaList);
          this.personaForm.reset();
          document.getElementById('cerrarAddPersona')?.click();
        },
        (error) => {
          alert('Ups, no se puedo actualizar. Por favor intentá nuevamente');
        }
      );
    } else {
      this.personaForm.markAllAsTouched();
      alert('Hay errores');
    }
  }

  get fullName() {
    return this.personaForm.get('fullName');
  }

  borrarPersona(id: any): void {
    this.pServ.deletePersona(id).subscribe(
      (data: any)=> {
        alert('la persona se eliminó con éxito');
      }
    );
  }
}
