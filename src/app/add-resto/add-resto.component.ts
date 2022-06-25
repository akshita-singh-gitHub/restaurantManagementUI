import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms';
import { RestoList } from '../model';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  @Input() ListItem?: RestoList;
componentname="user"

alert:boolean=false;
  constructor(private Resto: RestoService) { }

  RestoForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]),
    email: new FormControl('',[Validators.required,Validators.email]),
    address: new FormControl('',[Validators.required]),
  })

  ngOnInit(): void {
   

  }

  CollectResto() {
    // console.log(this.RestoForm.value);

    this.Resto.SaveResto(this.RestoForm.value).subscribe((result:RestoList[])=>{
      console.log(result)
      this.alert=true
      this.RestoForm.reset({})
    })
     
  }

  CloseAlert()
  {
    this.alert=false
  }
   get name(){
    return this.RestoForm.get('name');
  }
   get email(){
    return this.RestoForm.get('email');
  }
   get address(){
    return this.RestoForm.get('address');
  }
  numb(){
    return 100;
  }
  add(a:any,b:any){
    return a+b ;
  }
}
