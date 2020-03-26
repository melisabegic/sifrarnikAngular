import { Injectable } from '@angular/core';
import { PodstavkaSifrarnika } from '../class/podstavka-sifrarnika';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PodstavkaSifrarnikaAdd } from '../class/PodstavkaSifrarnikaAdd';

@Injectable({
  providedIn: 'root'
})
export class PodstavkaSifrarnikaService {

  constructor(private http: HttpClient) { }

  getPodstavkeByStavka(id: number): Observable<PodstavkaSifrarnika[]> {
    return this.http.get<PodstavkaSifrarnika[]>('https://localhost:44340/api/podstavkaSifrarnika/PodstavkaByStavkaId/' + id);
  }

  getPodstavkeById(podstavkaId: number) {
    console.log(podstavkaId);
    return this.http.get<PodstavkaSifrarnika>('https://localhost:44340/api/podstavkaSifrarnika/GetPodstavkaById/' + podstavkaId);
  }

  updatePodstavka(podstavka: PodstavkaSifrarnika) {
    return this.http.put("https://localhost:44340/api/podstavkaSifrarnika/update/" + podstavka.podstavkaSifrarnikaId, podstavka);
  }

  createPodstavkaSifrarnika(podstavka: PodstavkaSifrarnikaAdd) {
    console.log("u service");
    return this.http.post<PodstavkaSifrarnikaAdd>('https://localhost:44340/api/podstavkaSifrarnika/add/', podstavka);
  }

  ukoloniPodstavku(podstavkaId: number) {
    return this.http.delete<PodstavkaSifrarnika>('https://localhost:44340/api/podstavkaSifrarnika/delete/' + podstavkaId);
  }
}
