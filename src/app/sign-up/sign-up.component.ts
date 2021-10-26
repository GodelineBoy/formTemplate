import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  // declare the model and instantiate it
    user: User = new User();

  onSubmit(){
    //form submitted
    console.log('form submitted')
  }
  constructor() { }

  ngOnInit(): void {
  }

}
