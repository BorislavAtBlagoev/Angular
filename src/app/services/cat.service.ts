import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environmentCat } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Cat } from '../models/Cat';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private createCatPath = environmentCat.apiUrl + 'cats';

  constructor(private http: HttpClient, private authService: AuthService) { }

  create(data): Observable<Cat>{

    return this.http.post<Cat>(this.createCatPath, data);
  }
}
