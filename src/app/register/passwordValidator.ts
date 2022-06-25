import { AbstractControl } from "@angular/forms";

 export function passwordValidator(control: AbstractControl):{ [key: string]: boolean} |null{
const Password=control.get('Password');
const ConfirmPwd=control.get('ConfirmPwd');
if (Password?.pristine || ConfirmPwd?.pristine)
return null;
return Password?.value != ConfirmPwd?.value?

{ 'mismatch': true}:
null;



}