// Angular imports
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// Local imports
import {Registrar} from '../model/Registrar';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {
  private baseUrl = 'http://localhost:8000/countries';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Registrar[]> {
    return this.http.get<any>(this.baseUrl);
  }

  get(id: string): Observable<Registrar> {
    return this.http.get<any>(this.baseUrl + '/' + id);
  }

  create(Registrar: Registrar) {
    return this.http.post<any>(this.baseUrl, Registrar);
  }

  update(id: string, Registrar: Registrar): Observable<Registrar> {
    return this.http.put<any>(this.baseUrl + '/' + id, Registrar);
  }

  delete(id: string) {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
}
