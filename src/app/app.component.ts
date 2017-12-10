import { Component } from '@angular/core';
import { ViewChild, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { FormControlName } from '@angular/forms/src/directives/reactive_directives/form_control_name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*myform: FormGroup;
  //@ViewChild('user') form: any;
  title = 'app';
  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  formsubmit() {
    //console.log(userform.value);
    //this.form.reset();
    console.log(this.myform.value);
  }
 
  ngOnInit(){
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
      }),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      language: new FormControl()
    });
  } */
  userobject :{};
  userform : FormGroup;
  ngOnInit(){
    this.userform = new FormGroup({
      fname : new FormControl('',Validators.required),
      lname :new FormControl('',[Validators.required,Validators.minLength(4)])
    });

    }
    createUser(){
      console.log(this.userform.value);
      this.userobject = this.userform.value;
      console.log(this.userobject);
    }
  
}
