import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StavkaSifrarnikaService } from 'src/app/services/stavka-sifrarnika.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stavka-sifrarnika-edit',
  templateUrl: './stavka-sifrarnika-edit.component.html',
  styleUrls: ['./stavka-sifrarnika-edit.component.css']
})
export class StavkaSifrarnikaEditComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _stavkaService: StavkaSifrarnikaService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private routes: ActivatedRoute,
    public dialogRef: MatDialogRef<StavkaSifrarnikaEditComponent>
  ) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      stavkaSifrarnikaId: [''],
      oznaka: ['', Validators.required],
      naziv: ['', Validators.required],
      preduzece: ['', Validators.required],
      redniBroj: [''],
      sifrarnikId: ['']
    });

    this._stavkaService.getById(this.data.id)
      .subscribe((data: any) => {
        this.addForm.patchValue(data);
      });
  }

  update() {
    this._stavkaService.updateStavka(this.addForm.value).subscribe(() => {
      this.dialogRef.close();
      location.reload();
    },
      error => {
        alert(error);
      });
  }

  odbaci() {
    this.dialogRef.close();
  }
}
