import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { SurveyComponent } from './survey/survey.component';
import { User1Component } from './user1/user1.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"register",component:RegisterationComponent},
  {path:"login",component:LoginComponent},
  {path:"user1",component:User1Component},
  {path:"survey",component:SurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
