import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/modelos/experience';
import { ExperienceService } from 'src/app/servicios/experience.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {
  urlImageEx: string = '';
  positionEx: string = '';
  modeEx: string = '';
  startEx: string = '';
  endEx: string = '';


  constructor(private exS: ExperienceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    let experience = new Experience(this.urlImageEx, this.positionEx, this.modeEx, this.startEx, this.endEx);
    this.exS.addExperience(experience).subscribe(data =>
      {
        alert("La experiencia fue creada");
        this.router.navigate(['']);
      }, error => {
        alert("falló");
        this.router.navigate(['']);
      }
      )
  }
}
