import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { ModalComponent } from './modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { ActorCardComponent } from './actor-card/actor-card.component';
import { ProducerCardComponent } from './producer-card/producer-card.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { AddmoviesdetailsComponent } from './addmoviesdetails/addmoviesdetails.component';
import {CommonModule} from '@angular/common';
import { NgbTabset, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddactordetailsComponent } from './addactordetails/addactordetails.component';
import { AddproducerdetailsComponent } from './addproducerdetails/addproducerdetails.component';
import { FormsModule }   from '@angular/forms';
import { SuccessfulAlertComponent } from './successful-alert/successful-alert.component';
import { DangerousAlertComponent } from './dangerous-alert/dangerous-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    ButtonComponent,
    MenuCardComponent,
    ModalComponent,
    ActorCardComponent,
    ProducerCardComponent,
    AddDetailsComponent,
    AddmoviesdetailsComponent,
    AddactordetailsComponent,
    AddproducerdetailsComponent,
    SuccessfulAlertComponent,
    DangerousAlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: "/movies",
        pathMatch: 'full'
      },
      {path:'movies',component:CardComponent},
      {path:'actors',component:ActorCardComponent},
      {path:'producers',component:ProducerCardComponent},
      {path:'addmovies',component:AddDetailsComponent},
      {path:'addmovies/:menu1',component:AddmoviesdetailsComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
