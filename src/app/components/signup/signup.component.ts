import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { MustMatch } from '../../helper/must-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group(
      {
        fullName: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[a-zA-Z]+$/),
        ]),
        email: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[\da-zA-Z]+@prominentpixel.com$/),
        ]),
        username: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[a-z][a-z\d]*[a-z\d]+$/i),
        ]),

        password: new FormControl(null, [
          Validators.required,
          Validators.pattern(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/
          ),
        ]),
        confirmPassword: new FormControl(null, Validators.required),
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.signupForm.valid) {
      alert('invalid credentials!!');
      return;
    } else {
      this.submitted = false;
      this.authService.login(this.signupForm.value);
      this.router.navigate(['blog']);
    }
  }
}
