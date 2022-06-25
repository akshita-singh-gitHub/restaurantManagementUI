import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { FoodDetail } from '../shared/models/foodDetail';
// import { StarRatingComponent } from 'ng-starrating';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  FoodImages:FoodDetail[]=[];

  constructor(private FoodServ: FoodService ) { }




  ngOnInit(): void {
    this.FoodImages=this.FoodServ.getImages();
  }

 

  
}

