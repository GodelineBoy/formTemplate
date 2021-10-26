import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFormTemplates';
}

export class User {
  email: string="";
  firstname: string="";
  lastname: string="";
  password: string="";
}