import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RestoList } from './model';
import { Observable } from 'rxjs/internal/Observable';
// import { AngularFireDatabase } from '@angular/fire/compat/database';

// import { SignupComponent } from './signup/signup.component';

@Injectable({
  providedIn: 'root'
})


export class RestoService {


  // url = 'http://localhost:5194/api/restaurant';
  // rootURL = 'http://localhost:5194/api';

  url = 'http://localhost:3000/restaurant';
  rootURL = 'http://localhost:3000/';

   private URL ="Restaurant"


  constructor(private http: HttpClient, private fireauth: AngularFireAuth, private router :Router) { }

   public getList(): Observable<RestoList[]> {
    // return this.http.get(this.url);
    return this.http.get<RestoList[]>(`${environment.apiUrl}/${this.URL}`) ;
  }
  getOrderList() {
    return this.http.get(`${environment.apiUrl}/`+"Order") ;
//  return this.http.get(this.rootURL+"Orders");
  }
  SaveResto(data:RestoList) : Observable<RestoList[]>{
    // console.log(data);
// return this.http.post(this.url,data);
return this.http.post<RestoList[]>(`${environment.apiUrl}/${this.URL}`, data) ;
  }
  SaveOrder(OrderDetails:any){
    // console.log(data);
return this.http.post(this.rootURL+"Orders",OrderDetails);
  }
  DeleteResto(id:number)
  {
    // return this.http.delete(`${this.url}/${id}`);
    return this.http.delete<RestoList[]>(`${environment.apiUrl}/${this.URL}/${id}`) ;
  }

  RegisterUser(UserDetails:any){
   return this.http.post(this.rootURL+"user",UserDetails);
  }
  DetailToEdit(id:number)  {
  //  return this.http.get(`${this.url}/${id}`)
  return this.http.get(`${environment.apiUrl}/${this.URL}/${id}`) ;
  }
  UpdateResto(id:number,data:RestoList) : Observable<RestoList[]> {
    // return this.http.put(`${this.url}/${id}`,data)
    return this.http.put<RestoList[]>(`${environment.apiUrl}/${this.URL}/${id}`, data) ;

  }
  // signup(News_user:any){
  //   return this.http.post(this.rootURL+"News_user",News_user);

  // }


  signup(email:string,password : string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
// localStorage.setItem('token','true');
this.router.navigate(['/OrderList'])


    },err=>{
alert(err.message);
this.router.navigate(['/signup'])
    }   )
  }

  // register
  register(email:string,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( ()=>{
      alert('registration success');
      this.router.navigate(['/signup']);
    },err=>{
      alert(err.message);
      this.router.navigate(['/register'])
    }
    )
  }

  // signout
  logout(){
    this.fireauth.signOut().then( ()=> {
      // localStorage.removeItem('token');
      this.router.navigate(['/signup'])
    },err=>{
      alert(err.message);
     
    }
    )
  }




}
