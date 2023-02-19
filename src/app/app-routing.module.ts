import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerObjectiveEditComponent } from './components/pages/career-objective-edit/career-objective-edit.component';
import { CareerObjectiveNewComponent } from './components/pages/career-objective-new/career-objective-new.component';
import { CareerObjectivePageComponent } from './components/pages/career-objective-page/career-objective-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginPageComponent},
  {path:'career', component:CareerObjectivePageComponent},
  {path:'career/new',component:CareerObjectiveNewComponent},
  {path:'career/:id',component:CareerObjectiveEditComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
