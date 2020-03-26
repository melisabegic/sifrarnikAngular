import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StavkaSifrarnika } from '../class/stavka-sifrarnika';
import { StavkaSifrarnikaAdd } from '../class/stavkaSifrarnikaAdd';

@Injectable({
  providedIn: 'root'
})
export class StavkaSifrarnikaService {

  constructor(private http: HttpClient) { }

  getStavkeBySifrarnikId(id: number): Observable<StavkaSifrarnika[]> {
    return this.http.get<StavkaSifrarnika[]>('https://localhost:44340/api/stavkaSifrarnika/GetStavkaSifrarnikaBySifrarnik/' + id);
  }

  getStavkeAll(): Observable<StavkaSifrarnika[]> {
    return this.http.get<StavkaSifrarnika[]>('https://localhost:44340/api/stavkaSifrarnika/GetAll');
  }

  ukoloniStavku(stavkaId: number) {
    return this.http.delete<StavkaSifrarnika[]>('https://localhost:44340/api/stavkaSifrarnika/delete/' + stavkaId);
  }

  createStavkaSifrarnika(stavka: StavkaSifrarnikaAdd){
    return this.http.post<StavkaSifrarnikaAdd>('https://localhost:44340/api/stavkaSifrarnika/add', stavka);
  }

  getById(stavkaId:number){
    return this.http.get<StavkaSifrarnika>('https://localhost:44340/api/stavkaSifrarnika/GetStavka/' + stavkaId);
  }

  updateStavka(stavka: StavkaSifrarnika) {
    return this.http.put("https://localhost:44340/api/stavkaSifrarnika/update/" +stavka.stavkaSifrarnikaId, stavka);
  }
}
