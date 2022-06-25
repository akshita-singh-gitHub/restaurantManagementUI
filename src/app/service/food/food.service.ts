import { Injectable } from '@angular/core';
import { FoodDetail } from 'src/app/shared/models/foodDetail';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  
  url = 'http://localhost:3000/Orders';
  private URL ="Restaurant"

  constructor(private http: HttpClient) { }

  FoodDetails(id:any){
    return this.http.get(`${this.url}/${id}`)
   }

   SaveOrder(OrderDetails:any){
    // console.log(data);
// return this.http.post(this.url,OrderDetails);
return this.http.post(`${environment.apiUrl}/`+"Order", OrderDetails);

  }

  getImages():FoodDetail[]{
    return [
  
  {
    id: 1,
      name: 'Corn Curry',
       price: 500,
      favourite: true,
      star: 3,
      tags:['fast food','spicy ', 'lunch'],
      imageUrl:'/assets/corn-curry.jpg',
      CookTime: '20-30',
    
  
  },
  {
    id: 2,
      name: 'Biryani',
       price: 500,
      favourite: false,
      star: 3,
      tags:['fast food','spicy ', 'lunch'],
      imageUrl:  '/assets/biryani.jpg',
      CookTime: '20-30',
    
  
  },
  {
    id: 3,
      name: 'Dosa',
       price: 500,
      favourite: false,
      star: 3,
      tags:['fast food','spicy ', 'lunch'],
      imageUrl:   '/assets/dosa.jpg',
      CookTime: '20-30',
    
  
  },
  {
    id: 4,
      name: 'Idli',
       price: 500,
      favourite: true,
      star: 3,
      tags:['fast food','spicy ', 'lunch'],
      imageUrl:  '/assets/idli.jpg',
      CookTime: '20-30',
    
  
  },
  {
    id: 5,
      name: 'Brownies',
       price: 500,
      favourite: true,
      star: 3,
      tags:['fast food','spicy ', 'lunch'],
      imageUrl: '/assets/brownies.jpg',
      CookTime: '20-30',
    
  
  },
  {
    id: 6,
      name: 'Paneer Naan',
       price: 500,
      favourite: false,
      star: 3,
      tags:['fast food','spicy ', 'lunch'],
      imageUrl:'/assets/paneer-naan.jpg',
      CookTime: '20-30',
    
  
  },
  {
    id: 7,
      name: 'Momos',
       price: 500,
      favourite: false,
      star: 3,
      tags:['fast food','spicy ', 'lunch'],
      imageUrl:  '/assets/momos.jpg',
      CookTime: '20-30',
    
  
  },
  {
    id: 8,
      name: 'Cheesecake',
       price: 500,
      favourite: false,
      star: 3,
      tags:['fast food','sweet ', 'lunch'],
      imageUrl:     '/assets/cake.jpg',
      CookTime: '20-30',
    
  
  }
    
    ]
  }
  
}
