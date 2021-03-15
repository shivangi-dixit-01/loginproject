import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../Helper/alert.service';
import { AuthenticationServiceService } from '../Helper/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading: boolean;
  constructor(
    private formbuilder: FormBuilder,
    private route: Router,
    private authenticationService: AuthenticationServiceService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

  }
  get formControlnames() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.route.navigate(['/home']);
      console.log('User Logged In ')
    }
  }
}
