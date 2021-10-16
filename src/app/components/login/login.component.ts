import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { atLeastOneRequired } from '../../helper/atleast-one-required.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginType: string = 'username';
  submitted: boolean = false;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      selectId: new FormControl(),
      username: new FormControl(null, Validators.pattern(/^[a-z][a-z\d]*[a-z\d]+$/i)),
      email: new FormControl(null, Validators.pattern(/^[\da-zA-Z]+@prominentpixel.com$/)),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/
        ),
      ]),
    }, { validators: atLeastOneRequired('username', 'email') });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(!this.loginForm.valid){
      alert("invalid credentials!!");
    }
    this.authService.login(this.loginForm.value);
    this.router.navigate(['blog']);
  }
}
