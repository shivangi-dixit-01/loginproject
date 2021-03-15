import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../Helper/alert.service';
import { UserService } from '../Helper/user.service';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../Helper/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
        ) { 
          if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
        }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get regControlnames() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  }

  this.loading = true;
  this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
          data => {
              this.alertService.success('Registration successful', true);
              this.router.navigate(['/login']);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
}
}
