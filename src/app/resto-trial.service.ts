import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RestoList } from './model';


@Injectable({
  providedIn: 'root'
})
export class RestoTrialService {
 private url="Restaurant"
  constructor( private http: HttpClient) { }
  public GetRestoList() : Observable<RestoList[]>{
    // let List =new RestoList();
    // List.Id=1;
    // List.Name="Om";
    // List.Email="Om123@gmail.com";
    // List.Address="Noida";
    
    return this.http.get<RestoList[]>(`${environment.apiUrl}/${this.url}`) ;


  }
}
