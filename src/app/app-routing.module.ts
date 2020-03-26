import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SifrarnikListComponent } from './sifrarnik/list/sifrarnik-list/sifrarnik-list.component';
import { SifrarnikAddComponent } from './sifrarnik/add/sifrarnik-add/sifrarnik-add.component';
import { SifrarnikEditComponent } from './sifrarnik/edit/sifrarnik-edit/sifrarnik-edit.component';
import { StavkaSifrarnikaListComponent } from './stavkaSifrarnika/list/stavka-sifrarnika-list/stavka-sifrarnika-list.component';
import { StavkaSifrarnikaAddComponent } from './stavkaSifrarnika/add/stavka-sifrarnika-add/stavka-sifrarnika-add.component';
import { StavkaSifrarnikaEditComponent } from './stavkaSifrarnika/edit/stavka-sifrarnika-edit/stavka-sifrarnika-edit.component';
import { PodstavkaSifrarnikaListComponent } from './podstavkaSifrarnika/list/podstavka-sifrarnika-list/podstavka-sifrarnika-list.component';
import { PodstavkaSifrarnikaAddComponent } from './podstavkaSifrarnika/add/podstavka-sifrarnika-add/podstavka-sifrarnika-add.component';
import { PodstavkaSifrarnikaEditComponent } from './podstavkaSifrarnika/edit/podstavka-sifrarnika-edit/podstavka-sifrarnika-edit.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'sifrarnikList', component: SifrarnikListComponent },
  { path: 'sifrarnikAdd', component: SifrarnikAddComponent },
  { path: 'sifrarnikEdit/:id', component: SifrarnikEditComponent },

  { path: 'stavkaLista/:id', component: StavkaSifrarnikaListComponent },
  { path: 'stavkaAdd', component: StavkaSifrarnikaAddComponent },
  { path: 'stavkaEdit', component: StavkaSifrarnikaEditComponent },

  { path: 'podstavkaList/:id', component: PodstavkaSifrarnikaListComponent },
  { path: 'podstavkaAdd', component: PodstavkaSifrarnikaAddComponent },
  { path: 'podstavkaEdit', component: PodstavkaSifrarnikaEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
