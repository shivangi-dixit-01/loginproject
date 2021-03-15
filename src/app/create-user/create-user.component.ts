import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
userForm: FormGroup;
submitted = false;
  constructor(private formbuilder: FormBuilder) { }
  ngOnInit(): void {
    this.userForm = this.formbuilder.group({
      name: ['', Validators.required],
      lastName: ['', ],
      username: ['', ],
      password: ['', ]
    })
    }

    get formControlnames()
    {
      return this.userForm.controls;
    }

    onSubmit() {
      this.submitted = true;
      console.log('User Created ')
    }

}
