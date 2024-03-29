import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  persona: any;
  form!: FormGroup;
  usuarioAutenticado: boolean = true; //debe estar en false cuando se inicializa

  constructor(private pServ: PersonaService, private fBuilder: FormBuilder)
{
    this.form = this.fBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      position: ['', [Validators.required]],
      location: ['', [Validators.required]],
      urlImage: ['https://', [Validators.required, Validators.pattern('https?://.+')],],
      about: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.pServ.obtenerDatosPersona().subscribe((data) => {
      // console.log(data);
      this.persona = data;
    });
  }

  guardarEditPersona(): void {
    if (this.form.valid) {
      let fullName = this.form.controls['fullName'].value;
      let position = this.form.controls['position'].value;
      let location = this.form.controls['location'].value;
      let urlImage = this.form.controls['urlImage'].value;
      let about = this.form.controls['about'].value;

      let editarPersona = new Persona(fullName, position, location, urlImage, about);

      this.pServ.editarDatosPersona(this.form.value).subscribe((data) => {
          this.persona = editarPersona;
          this.form.reset();
          document.getElementById('cerrarEditPersona_Info')?.click();
        },
        (error) => {
          alert('Ups, no se puedo actualizar. Por favor intentá nuevamente');
        }
      );
    } else {
      this.form.markAllAsTouched();
      alert('Hay errores');
    }
  }

  mostrarPlaceholderEditPersonaInfo() {
    this.form.get('fullName')?.setValue(this.persona.fullName);
    this.form.get('position')?.setValue(this.persona.position);
    this.form.get('location')?.setValue(this.persona.location);
    this.form.get('urlImage')?.setValue(this.persona.urlImage);
    this.form.get('about')?.setValue(this.persona.about);
  }

  get fullName() {
    return this.form.get('fullName');
  }
}
