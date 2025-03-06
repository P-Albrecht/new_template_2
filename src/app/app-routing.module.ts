import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnviromentComponent } from "./enviroment/enviroment.component";

const routes: Routes = [
    { path: 'HeroSearchComponent'
     , component: EnviromentComponent },
    { path: 'DashboardComponent'
     , component: EnviromentComponent },
    { path: 'HeroesComponent'
     , component: EnviromentComponent },
    { path: 'HeroDetailComponent'
          + '/:id'
     , component: EnviromentComponent },
    { path: 'enviroment', component: EnviromentComponent },
    { path: '', redirectTo: '/enviroment', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
