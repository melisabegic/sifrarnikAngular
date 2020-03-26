import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sifrarnik } from '../class/sifrarnik';

@Injectable({
  providedIn: 'root'
})
export class SifrarnikService {

  constructor(private http: HttpClient) { }

  getAllSifrarnik(): Observable<Sifrarnik[]> {
    return this.http.get<Sifrarnik[]>('https://localhost:44340/api/sifrarnik/getall');
  }

  createSifrarnik(sifrarnik: Sifrarnik) {
    return this.http.post<Sifrarnik>('https://localhost:44340/api/sifrarnik/add', sifrarnik);
  }

  getBySifrarnikId(sifrarnikId: number): Observable<Sifrarnik> {
    return this.http.get<Sifrarnik>('https://localhost:44340/api/sifrarnik/getsifrarnik/' + sifrarnikId);
  }

  ukloniSifrarnik(sifrarnikId: number) {
    return this.http.delete<Sifrarnik>('https://localhost:44340/api/sifrarnik/izbrisi/' + sifrarnikId);
  }

  updateSifrarnik(sifrarnik: Sifrarnik) {
    return this.http.put("https://localhost:44340/api/sifrarnik/update/" +sifrarnik.sifrarnikId, sifrarnik);
  }
}
