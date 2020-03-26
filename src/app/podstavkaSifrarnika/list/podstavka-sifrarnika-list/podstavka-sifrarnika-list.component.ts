import { Component, OnInit, Inject } from '@angular/core';
import { PodstavkaSifrarnika } from 'src/app/class/podstavka-sifrarnika';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PodstavkaSifrarnikaService } from 'src/app/services/podstavka-sifrarnika.service';
import { PodstavkaSifrarnikaAddComponent } from '../../add/podstavka-sifrarnika-add/podstavka-sifrarnika-add.component';
import { PodstavkaSifrarnikaEditComponent } from '../../edit/podstavka-sifrarnika-edit/podstavka-sifrarnika-edit.component';
import { StavkaSifrarnika } from 'src/app/class/stavka-sifrarnika';
import { StavkaSifrarnikaService } from 'src/app/services/stavka-sifrarnika.service';
import { SifrarnikService } from 'src/app/services/sifrarnik.service';
import { Sifrarnik } from 'src/app/class/sifrarnik';

@Component({
  selector: 'app-podstavka-sifrarnika-list',
  templateUrl: './podstavka-sifrarnika-list.component.html',
  styleUrls: ['./podstavka-sifrarnika-list.component.css']
})
export class PodstavkaSifrarnikaListComponent implements OnInit {
  podstavkeList: PodstavkaSifrarnika[];
  searchText: string;
  constructor(private _podstavkaService: PodstavkaSifrarnikaService,
    private _stavkaService: StavkaSifrarnikaService,
    private _sifrarnikService: SifrarnikService,
    private dialog: MatDialog,
    private routes: ActivatedRoute,

  ) { }
  addForm: FormGroup;
  stavkaSifrarnikaId: number;
  stavkaSifrarnika:StavkaSifrarnika;
sifrarnik:Sifrarnik;
sifrarnikId:number;
  ngOnInit(): void {
    const routeParams = this.routes.snapshot.params;
    this.stavkaSifrarnikaId = routeParams.id;
console.log("stavka sifranrika", this.stavkaSifrarnikaId);
    this._stavkaService.getById(this.stavkaSifrarnikaId)
    .subscribe(stavkaSifrarnika=>{
      this.stavkaSifrarnika=stavkaSifrarnika
console.log("sifrarniknpokusaj",this.stavkaSifrarnika.sifrarnikId);
this.sifrarnikId=this.stavkaSifrarnika.sifrarnikId;
this._sifrarnikService.getBySifrarnikId(this.sifrarnikId)
.subscribe(sifrarnik=>{
  this.sifrarnik=sifrarnik
console.log(" sifranrika", this.sifrarnikId);

});
    });


    this._sifrarnikService.getBySifrarnikId(this.sifrarnikId)
    .subscribe(sifrarnik=>{
      this.sifrarnik=sifrarnik
    });

    this._podstavkaService.getPodstavkeByStavka(routeParams.id)
      .subscribe(podstavkeList => {
        this.podstavkeList = podstavkeList
      });
  }

  addPodstavka() {
    this.dialog.open(PodstavkaSifrarnikaAddComponent, {
      data: { id: this.stavkaSifrarnikaId },
    });
  }

  izbrisiPodstavku(podstavka: PodstavkaSifrarnika) {
    console.log("brisanjepodrstavek", podstavka.podstavkaSifrarnikaId);

    this._podstavkaService.ukoloniPodstavku(podstavka.podstavkaSifrarnikaId)
      .subscribe(data => {
        this.podstavkeList = this.podstavkeList.filter(s => s !== podstavka);

      });
  }

  editPodstavka(podstavka: PodstavkaSifrarnika) {
    console.log("u listi ts");
    let dialogRef = this.dialog.open(PodstavkaSifrarnikaEditComponent, {
      data: { id: podstavka.podstavkaSifrarnikaId },
    });
  }
}
