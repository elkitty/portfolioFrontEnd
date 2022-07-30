
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExperienceComponent } from './componentes/experience/add-experience.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';



const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'agregarexperiencia', component: AddExperienceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
