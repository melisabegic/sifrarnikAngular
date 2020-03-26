import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SifrarnikService } from 'src/app/services/sifrarnik.service';
import { Sifrarnik } from 'src/app/class/sifrarnik';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-sifrarnik-edit',
  templateUrl: './sifrarnik-edit.component.html',
  styleUrls: ['./sifrarnik-edit.component.css']
})
export class SifrarnikEditComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private _sifrarnikService: SifrarnikService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SifrarnikEditComponent>
  ) { }

  ngOnInit(): void {
    console.log("routePatams:", this.data.id);
    this.addForm = this.formBuilder.group({
      sifrarnikId: [''],
      oznaka: ['', Validators.required],
      naziv: ['', Validators.required],
      opis: ['', Validators.required],
      programerski: [false],
      kesiranje: [false]
    });

    this._sifrarnikService.getBySifrarnikId(this.data.id)
      .subscribe((data: any) => {
        this.addForm.patchValue(data);
      });
  }

  update() {
    this._sifrarnikService.updateSifrarnik(this.addForm.value).subscribe(() => {
      this.dialogRef.close();
    },
      error => {
        alert(error);
      });
  }

  odbaci() {
    this.dialogRef.close();
  }
}

