import { Component, OnInit } from '@angular/core';
// User Model
import { User } from './app-signup-user';




@Component({
  selector: 'app-app-sign-up',
  templateUrl: './app-sign-up.component.html',
  styleUrls: ['./app-sign-up.component.css']
})
export class AppSignUpComponent implements OnInit {
 //Property for the gender
 private gender: string[];
 //Property for the user
user: User;

 ngOnInit() {

   this.gender =  ['Male', 'Female', 'Others'];
   //Create a new user object
   this.user = new User({
       email:"paulsonps@neoito.com", 
       password: { pwd: "fakepass" , confirmPwd: "fakepass"}, 
       gender: this.gender[0], terms: false});
   }

  onFormSubmit({ value, valid}: { value: User, valid: boolean }) {
    this.user = value;
    console.log( this.user);
    console.log("valid: " + valid);
  }
}
