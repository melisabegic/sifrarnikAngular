import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PodstavkaSifrarnikaService } from 'src/app/services/podstavka-sifrarnika.service';
import { PodstavkaSifrarnikaAdd } from 'src/app/class/PodstavkaSifrarnikaAdd';

@Component({
  selector: 'app-podstavka-sifrarnika-add',
  templateUrl: './podstavka-sifrarnika-add.component.html',
  styleUrls: ['./podstavka-sifrarnika-add.component.css']
})
export class PodstavkaSifrarnikaAddComponent implements OnInit {
  addForm:FormGroup
  stavkaSifrarnikaId:number;

  constructor(
    private formBuilder:FormBuilder,
    private _podstavkaService: PodstavkaSifrarnikaService,
    private dialogRef: MatDialogRef<PodstavkaSifrarnikaAddComponent>, @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      oznaka: ['', Validators.required],
      naziv: ['', Validators.required],
      preduzece: ['', Validators.required],
      redniBroj: [''],
    });    
  }

  onSumbit() {
    let newPodstavkaSifrarnika: PodstavkaSifrarnikaAdd = {
      stavkaSifrarnikaId: this.data.id,
      oznaka: this.addForm.get('oznaka').value,
      naziv: this.addForm.get('naziv').value,
      preduzece: this.addForm.get('preduzece').value,
      redniBroj: this.addForm.get('redniBroj').value,
      }
      console.log(this.data.id);
  
    this._podstavkaService.createPodstavkaSifrarnika(newPodstavkaSifrarnika)
    .subscribe(data=>{
    this.dialogRef.close();
      location.reload();
    });
  }

  odbaci() {
    this.dialogRef.close();
  }
}
