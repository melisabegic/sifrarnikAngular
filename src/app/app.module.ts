import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SifrarnikEditComponent } from './sifrarnik/edit/sifrarnik-edit/sifrarnik-edit.component';
import { SifrarnikAddComponent } from './sifrarnik/add/sifrarnik-add/sifrarnik-add.component';
import { SifrarnikListComponent } from './sifrarnik/list/sifrarnik-list/sifrarnik-list.component';
import { StavkaSifrarnikaAddComponent } from './stavkaSifrarnika/add/stavka-sifrarnika-add/stavka-sifrarnika-add.component';
import { StavkaSifrarnikaListComponent } from './stavkaSifrarnika/list/stavka-sifrarnika-list/stavka-sifrarnika-list.component';
import { StavkaSifrarnikaEditComponent } from './stavkaSifrarnika/edit/stavka-sifrarnika-edit/stavka-sifrarnika-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PodstavkaSifrarnikaEditComponent } from './podstavkaSifrarnika/edit/podstavka-sifrarnika-edit/podstavka-sifrarnika-edit.component';
import { PodstavkaSifrarnikaAddComponent } from './podstavkaSifrarnika/add/podstavka-sifrarnika-add/podstavka-sifrarnika-add.component';
import { PodstavkaSifrarnikaListComponent } from './podstavkaSifrarnika/list/podstavka-sifrarnika-list/podstavka-sifrarnika-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    SifrarnikEditComponent,
    SifrarnikAddComponent,
    SifrarnikListComponent,
    StavkaSifrarnikaAddComponent,
    StavkaSifrarnikaListComponent,
    StavkaSifrarnikaEditComponent,
    PodstavkaSifrarnikaEditComponent,
    PodstavkaSifrarnikaAddComponent,
    PodstavkaSifrarnikaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
 // entryComponents: [SifrarnikEditComponent],
})
export class AppModule { }
