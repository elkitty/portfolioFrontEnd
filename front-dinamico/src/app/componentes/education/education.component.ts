import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Education } from 'src/app/modelos/education';
import { EducationService } from 'src/app/servicios/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})

export class EducationComponent implements OnInit {
  public educationList: Education[] = [];
  public addEducation: Education | undefined;
  public editEducation: Education | undefined;
  public deleteEducation: Education | undefined;


  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.getEducation();
  }

  public getEducation(): void {
    this.educationService.getEducation().subscribe({
      next: (response: Education[]) => {
        this.educationList = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  // public onOpenModal(mode: String, education?: Education): void {
  //   const container = document.getElementById('container');
  //   const button = document.createElement('button');
  //   button.style.display = 'none';
  //   button.setAttribute('data-toggle', 'modal');

  //   if (mode === 'add') {
  //     this.addEducation = education;
  //     button.setAttribute('data-target', '#addEducationModal');
  //   } else if (mode === 'delete') {
  //     this.deleteEducation = education;
  //     button.setAttribute('data-target', '#deleteEducationModal');
  //   } else if (mode === 'edit') {
  //     this.editEducation = education;
  //     button.setAttribute('data-target', '#editEducationModal');
  //   }
  //   container?.appendChild(button);
  //   button.click();
  // }

  AddEducation(addForm: NgForm){

    this.educationService.addEducation(addForm.value).subscribe({
      next: (response: Education) => {
        console.log(response);
        this.getEducation();
        addForm.reset();
        document.getElementById('cerrarAddEducationForm')?.click();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  onEditEducation(education: Education) {
    this.editEducation = education;

    this.educationService.updatetEducation(education).subscribe({
      next: (response: Education) => {
        console.log(response);
        document.getElementById('cerrarAddEducationForm')?.click();
        this.getEducation();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  onDeleteEducation(idEdu: number): void {
    this.educationService.deletetEducation(idEdu).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getEducation();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
