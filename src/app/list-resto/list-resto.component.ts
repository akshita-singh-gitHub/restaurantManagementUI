import { Component, OnInit } from '@angular/core';
import { RestoList } from '../model';
// import { AnyForUntypedForms } from '@angular/forms';
import { RestoService } from '../resto.service';
// import { UpdateRestoComponent } from '../update-resto/update-resto.component';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})

export class ListRestoComponent implements OnInit {
  collection: RestoList[] = [];
  nameSearch:string=''
  constructor(private resto: RestoService) { }


  ngOnInit(): void {
    this.resto.getList().subscribe((result: RestoList[]) => {
      // console.log(result);
      this.collection = result;
    })
  
  }
  Delete(item:any){
    this.collection.splice(item,1)
    this.resto.DeleteResto(item).subscribe((result )=>{
      console.log(result ,'result deleted');
    })
          

  }

 
}