import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SifrarnikService } from 'src/app/services/sifrarnik.service';
import { Sifrarnik } from 'src/app/class/sifrarnik';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sifrarnik-add',
  templateUrl: './sifrarnik-add.component.html',
  styleUrls: ['./sifrarnik-add.component.css']
})
export class SifrarnikAddComponent implements OnInit {
  sifrarnikId: number;
  constructor(private formBuilder: FormBuilder,
    private apiService: SifrarnikService,
    private router: Router,
    private dialogRef: MatDialogRef<SifrarnikAddComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  addForm: FormGroup;
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      oznaka: ['', Validators.required],
      naziv: ['', Validators.required],
      opis: ['', Validators.required],
      programerski: [false],
      kesiranje: [false]
    });
  }

  onSumbit() {
    this.apiService.createSifrarnik(this.addForm.value)
      .subscribe(data => {
        this.dialogRef.close();
        location.reload();
      });
  }

  odbaci() {
    this.dialogRef.close();
  }
}
