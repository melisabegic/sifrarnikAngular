import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StavkaSifrarnikaService } from 'src/app/services/stavka-sifrarnika.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StavkaSifrarnikaAdd } from 'src/app/class/stavkaSifrarnikaAdd';

@Component({
  selector: 'app-stavka-sifrarnika-add',
  templateUrl: './stavka-sifrarnika-add.component.html',
  styleUrls: ['./stavka-sifrarnika-add.component.css']
})
export class StavkaSifrarnikaAddComponent implements OnInit {
  addForm: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private _stavkaService: StavkaSifrarnikaService,
    private dialogRef: MatDialogRef<StavkaSifrarnikaAddComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  sifrarnikId: number;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      oznaka: ['', Validators.required],
      naziv: ['', Validators.required],
      preduzece: ['', Validators.required],
      redniBroj: ['']
    });
  }

  onSumbit() {
    let newStavkaSifrarnika: StavkaSifrarnikaAdd = {
      sifrarnikId: this.data.id,
      oznaka: this.addForm.get('oznaka').value,
      naziv: this.addForm.get('naziv').value,
      preduzece: this.addForm.get('preduzece').value,
      redniBroj: this.addForm.get('redniBroj').value,
    }

    this._stavkaService.createStavkaSifrarnika(newStavkaSifrarnika)
      .subscribe(data => {
        this.dialogRef.close();
        location.reload();
      });
  }

  odbaci() {
    this.dialogRef.close();
  }
}
