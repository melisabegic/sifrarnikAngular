import { Component, OnInit } from '@angular/core';
import { Sifrarnik } from 'src/app/class/sifrarnik';
import { Router, ActivatedRoute } from '@angular/router';
import { SifrarnikService } from 'src/app/services/sifrarnik.service';
import { MatDialog } from '@angular/material/dialog';
import { StavkaSifrarnikaListComponent } from 'src/app/stavkaSifrarnika/list/stavka-sifrarnika-list/stavka-sifrarnika-list.component';
import { SifrarnikEditComponent } from '../../edit/sifrarnik-edit/sifrarnik-edit.component';
import { SifrarnikAddComponent } from '../../add/sifrarnik-add/sifrarnik-add.component';

@Component({
  selector: 'app-sifrarnik-list',
  templateUrl: './sifrarnik-list.component.html',
  styleUrls: ['./sifrarnik-list.component.css']
})
export class SifrarnikListComponent implements OnInit {

  sifrarnikList: Sifrarnik[];
  searchText: string;

  constructor(private _sifrarnikService: SifrarnikService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._sifrarnikService.getAllSifrarnik()
      .subscribe(sifrarnikList => {
        this.sifrarnikList = sifrarnikList
      });
  }

  editSifrarnik(sifrarnik: Sifrarnik) {

    let dialogRef = this.dialog.open(SifrarnikEditComponent, {
      data: { id: sifrarnik.sifrarnikId },
    }).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  addSifrarnik() {
    this.dialog.open(SifrarnikAddComponent);
  }

  refresh() {
    this._sifrarnikService.getAllSifrarnik()
      .subscribe(sifrarnikList => {
        this.sifrarnikList = sifrarnikList
      });
  }

  izbrisiSifrarnik(sifrarnik: Sifrarnik): void {
    this._sifrarnikService.ukloniSifrarnik(sifrarnik.sifrarnikId).subscribe(data => {
      this.sifrarnikList = this.sifrarnikList.filter(s => s !== sifrarnik);
      location.reload();
    });
  }
}
