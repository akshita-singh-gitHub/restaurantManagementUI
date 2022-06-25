import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms';
import { FoodService } from '../service/food/food.service';
import { RestoService } from '../resto.service';
import { FoodDetail } from '../shared/models/foodDetail';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


    FoodImages:FoodDetail[]=[];
    alert:boolean=false;
    constructor(private FoodServ: FoodService , private router: ActivatedRoute) { }
  
    CheckoutForm = new FormGroup({
    Name: new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]),
    Food: new FormControl(''),
    Email: new FormControl('',[Validators.required,Validators.email]),
    Address: new FormControl('',[Validators.required]),
  })
   
  
  
    ngOnInit(): void {
     
      this.FoodServ.FoodDetails(this.router.snapshot.params['id']).subscribe((result:any)=>{
        // console.log(result);
        this.CheckoutForm = new FormGroup({
          Name: new FormControl(''),
          Email: new FormControl(''),
          Address: new FormControl(''),
          Food: new FormControl(result['Food']),
        })
      
      })
    }
  
    CollectOrder() {
      // console.log(this.CheckoutForm.value);
  
      this.FoodServ.SaveOrder(this.CheckoutForm.value).subscribe((result:any)=>{
        console.log(result)
        this.alert=true
        this.CheckoutForm.reset({})
      })
       
    }
  
    CloseAlert()
    {
      this.alert=false
    }
     get Name(){
      return this.CheckoutForm.get('Name');
    }
     get Email(){
      return this.CheckoutForm.get('Email');
    }
     get Address(){
      return this.CheckoutForm.get('Address');
    }
  
  
  
  
    
  }
  
  


