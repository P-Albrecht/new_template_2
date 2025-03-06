import { NgModule } from '@angular/core';
import { EnviromentComponent } from './enviroment.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ResizableModule } from 'angular-resizable-element';
import { HeroDetailComponent } from 'src/app/hero-detail/hero-detail.component';
import { HeroService } from 'src/app/hero.service';
import { MessageService } from 'src/app/message.service';
import { HeroSearchComponent } from 'src/app/hero-search/hero-search.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { HeroesComponent } from 'src/app/heroes/heroes.component';
import { InMemoryDataService } from 'src/app/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    EnviromentComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    DashboardComponent,
    HeroesComponent,
  ],
  imports: [
    BrowserModule, 
    ResizableModule,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
        dataEncapsulation: false,
    }),
  ],
  exports: [
    EnviromentComponent,
  ],
  providers: [
    HeroService,
    MessageService,
    InMemoryDataService,
  ],
  bootstrap: [
  ]
})
export class EnviromentModule { }
