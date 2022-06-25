import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { RestoService } from '../resto.service';
import { passwordValidator } from './passwordValidator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  email:any='';
  password :any='';

  alert: boolean = false;
  constructor(private resto: RestoService) {}
  // RegisterForm = new FormGroup({
  //   Name: new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]),
  //   Email: new FormControl('',[Validators.required,Validators.email]),
  //   Password: new FormControl('',[Validators.required,  Validators.minLength(4)]),
  //   ConfirmPwd: new FormControl('',[Validators.required,Validators.minLength(4)] ),
    
  // },{validators :passwordValidator});
  ngOnInit(): void {}
  // CollectUser() {
  //   // console.log(this.RegisterForm.value)
  //   this.resto.RegisterUser(this.RegisterForm.value).subscribe((result) => {
  //     console.log(result);
  //   });
  //   this.alert = true;
  // }


  register(){

    if(this.email==''){
    alert('plese enter values')
    return;
  }
    if(this.password==''){
    alert('plese enter values')
    return;
  }
  
  this.resto.register(this.email,this.password);
  this.email='';
  this.password='';
  }


  // CloseAlert() {
  //   this.alert = false;
  //   this.RegisterForm.reset({});
  // }

  // get Name(){
  //   return this.RegisterForm.get('Name');
  // }
  //  get Email(){
  //   return this.RegisterForm.get('Email');
  // }
  //  get Password(){
  //   return this.RegisterForm.get('Password');
  // }
  //  get ConfirmPwd(){
  //   return this.RegisterForm.get('ConfirmPwd');
  // }
}
