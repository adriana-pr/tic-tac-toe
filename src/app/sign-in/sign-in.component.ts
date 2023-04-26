import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../service/users.service';
import { Users } from '../users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  items: any;
  errorItems = false;
  constructor(private formBuilder: FormBuilder, 
    private usersService: UsersService,
    private route:Router) {
  }
  form: FormGroup | any;
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });

  }

  onClick() {
    this.form.disable();
    this.errorItems = false;

    if (!this.form.get('email').errors || !this.form.get('password').errors) {
      this.usersService.getUser(this.form.value).subscribe((data: any) => {
        this.items = data;
        this.form.enable(this.items);
        // console.log(data);
        if (this.items.message == "error") {
          this.errorItems = true;
          // console.log(this.items.message);
        }
        if(this.items.message!="error" && !this.usersService.getLogin()){
          localStorage.setItem('login', JSON.stringify(this.items));
          this.usersService.logIn();
          // console.log(this.items.message);

        }
        if(this.usersService.getLogin()){
          this.route.navigate(['']);
        }
      });
    }
   
  }
}