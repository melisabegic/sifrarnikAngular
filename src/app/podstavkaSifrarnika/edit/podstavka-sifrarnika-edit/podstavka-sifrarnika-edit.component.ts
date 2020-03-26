import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PodstavkaSifrarnikaService } from 'src/app/services/podstavka-sifrarnika.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { StavkaSifrarnikaEditComponent } from 'src/app/stavkaSifrarnika/edit/stavka-sifrarnika-edit/stavka-sifrarnika-edit.component';

@Component({
  selector: 'app-podstavka-sifrarnika-edit',
  templateUrl: './podstavka-sifrarnika-edit.component.html',
  styleUrls: ['./podstavka-sifrarnika-edit.component.css']
})
export class PodstavkaSifrarnikaEditComponent implements OnInit {

  addForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _podstavkaService: PodstavkaSifrarnikaService, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<StavkaSifrarnikaEditComponent>
  ) { }

  ngOnInit():void {
      this.addForm = this.formBuilder.group({
        podstavkaSifrarnikaId: [''],
        oznaka: ['', Validators.required],
        naziv: ['', Validators.required],
        preduzece: ['', Validators.required],
        redniBroj: [''],
        stavkaSifrarnikaId: ['']
      });
  
      this._podstavkaService.getPodstavkeById(this.data.id)
      .subscribe((data: any) => {
        this.addForm.patchValue(data);
      });
  }

  update(){    
    this._podstavkaService.updatePodstavka(this.addForm.value).subscribe(()=>{
      this.dialogRef.close();
      location.reload();
    },
    error=>{
      alert(error);
    });
  }
  
  odbaci() {
    this.dialogRef.close();    
  }
}
