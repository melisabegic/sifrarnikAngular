import { Component, OnInit } from '@angular/core';
import { StavkaSifrarnikaService } from 'src/app/services/stavka-sifrarnika.service';
import { StavkaSifrarnika } from 'src/app/class/stavka-sifrarnika';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StavkaSifrarnikaAddComponent } from '../../add/stavka-sifrarnika-add/stavka-sifrarnika-add.component';
import { MatDialog } from '@angular/material/dialog';
import { StavkaSifrarnikaEditComponent } from '../../edit/stavka-sifrarnika-edit/stavka-sifrarnika-edit.component';
import { Sifrarnik } from 'src/app/class/sifrarnik';
import { SifrarnikService } from 'src/app/services/sifrarnik.service';

@Component({
  selector: 'app-stavka-sifrarnika-list',
  templateUrl: './stavka-sifrarnika-list.component.html',
  styleUrls: ['./stavka-sifrarnika-list.component.css']
})
export class StavkaSifrarnikaListComponent implements OnInit {
  stavkeList: StavkaSifrarnika[];
  searchText: string;
  sifrarnikId: number;
  sifrarnik: Sifrarnik;

  constructor(private _stavkaService: StavkaSifrarnikaService,
    private _sifrarnikService: SifrarnikService,
    private dialog: MatDialog,
    private routes: ActivatedRoute) { }

  addForm: FormGroup;

  ngOnInit() {
    const routeParams = this.routes.snapshot.params;
    this.sifrarnikId = routeParams.id;

    this._stavkaService.getStavkeBySifrarnikId(routeParams.id)
      .subscribe(stavkeList => {
        this.stavkeList = stavkeList
      });

    this._sifrarnikService.getBySifrarnikId(this.sifrarnikId)
    .subscribe(sifrarnik => {
      this.sifrarnik = sifrarnik;
    });

  

  }

  addStavka() {
    this.dialog.open(StavkaSifrarnikaAddComponent, {
      data: { id: this.sifrarnikId },
    });
  }

  izbrisiStavku(stavka: StavkaSifrarnika) {
    console.log(stavka.stavkaSifrarnikaId);

    this._stavkaService.ukoloniStavku(stavka.stavkaSifrarnikaId)
      .subscribe(data => {
        this.stavkeList = this.stavkeList.filter(s => s !== stavka);
        location.reload();
      });
  }

  editStavka(stavka: StavkaSifrarnika) {
    console.log("u listi ts");
    let dialogRef = this.dialog.open(StavkaSifrarnikaEditComponent, {
      data: { id: stavka.stavkaSifrarnikaId },
    });
  }

}
