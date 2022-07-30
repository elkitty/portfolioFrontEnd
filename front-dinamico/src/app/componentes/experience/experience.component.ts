import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/modelos/experience';
import { ExperienceService } from 'src/app/servicios/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})

export class ExperienceComponent implements OnInit {

  experienceList: Experience[] = [];

  constructor(private exS: ExperienceService) {}

  ngOnInit(): void {
    this.loadExperience();

  }

  loadExperience(): void {
    this.exS.getExperience().subscribe(data => {this.experienceList = data;})
  }





}


