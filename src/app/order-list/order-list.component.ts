import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  OrderList:any = [];
  
  constructor(private resto: RestoService) { }


  ngOnInit(): void {
    this.resto.getOrderList().subscribe((result) => {
      console.log(result);
      this.OrderList = result;
    })
  
  }
 

}
