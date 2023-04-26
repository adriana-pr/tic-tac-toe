import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UsersService } from '../service/users.service';
import { Users } from '../users';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  success = false;
  items:any;
  constructor( private formBuilder:FormBuilder, private usersService: UsersService) {
   }
   form: FormGroup|any;
  ngOnInit(){
    this.form = this.formBuilder.group({
      name:["", [Validators.required, Validators.minLength(3)]],
    email:["", [Validators.required,Validators.email]],
      password:["", [Validators.required, Validators.minLength(5)]]
    });

  }

  onSubmit(){
    if(!this.form.get('name').errors || !this.form.get('email').errors|| !this.form.get('password').errors){
      this.usersService.insertUser(this.form.value).subscribe(
        (data: any) => {
          this.items = data;
          // console.log(data);
          this.success = true;
            localStorage.setItem('login', JSON.stringify(this.items));
            this.usersService.logIn();
        }
      )
    }
  }
}
