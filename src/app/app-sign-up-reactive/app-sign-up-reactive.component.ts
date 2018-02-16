import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';

import { User } from '../app-sign-up/app-signup-user';

@Component({
  selector: 'app-app-sign-up-reactive',
  templateUrl: './app-sign-up-reactive.component.html',
  styleUrls: ['./app-sign-up-reactive.component.css']
})
export class AppSignUpReactiveComponent implements OnInit {
  items: any;
 //Inject the formbuilder into the constructor
  constructor(private fb:FormBuilder) {}

  //Property for the user
  private user:User;

  //Gender list for the select control element
   genderList: string[];
   signupForm: FormGroup;


  ngOnInit() {

    this.genderList =  ['Male', 'Female', 'Others'];

    // Use the formbuilder to build the Form model
    this.signupForm  = this.fb.group({
			email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
			password: this.fb.group({
				    pwd: ['', [Validators.required,  Validators.minLength(8)]],
			    	confirmPwd: ['', [Validators.required, Validators.minLength(8)]]
			}),
      gender: ['', Validators.required],
       //requiredTrue so that the terms field isvalid only if checked
      terms: ['', Validators.requiredTrue],
      items: this.fb.array([ this.createItem() ])
		})
  
   }

   createItem(): FormGroup {
    return this.fb.group({
      name: '',
      description: '',
      price: ''
    });
  }
  addItem(): void {
    this.items = this.signupForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  deleteRow(index: number) {
    // control refers to your formarray
    this.items = this.signupForm.get('items') as FormArray;
    // remove the chosen row
    this.items.removeAt(index);
}

    get email() { return this.signupForm.get('email'); }
    
    get password() { return this.signupForm.get('password'); }

    get gender() { return this.signupForm.get('gender'); }

    get terms() { return this.signupForm.get('terms'); }

  onFormSubmit() {
    if(this.signupForm.valid) {
        this.user = this.signupForm.value;
        console.log(this.user);
        /* Any API call logic via services goes here */
    }
  }
}
