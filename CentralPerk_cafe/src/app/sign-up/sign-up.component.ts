import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { min } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
userForm : FormGroup;
userResult : any;
user : any;
  constructor( private userservice : UserServiceService ,private formbuilder:FormBuilder ) { 
    this.userForm = this.formbuilder.group(
      {
        userName: ['', Validators.required],
        emailId: ['', [Validators.required, Validators.email]],
        phoneNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        role: ['admin', Validators.required]
      }
    )
  }
addUser(){
  console.log(this.userForm.value)
  if(this.userForm?.valid){
    this.userservice.userService(this.userForm.value).subscribe(
      ( response: any) =>{
        this.userResult=true;
        this.user = this.userForm.value.userName;
        console.log('user added successfully',response)
      },
      ( error: any) =>{
        console.log('error adding user ',error)
      }
    );
  }else{
    console.log('form is invalid');
  }
}
  ngOnInit(): void {
  }

}
