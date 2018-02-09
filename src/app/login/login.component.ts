import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') LoginForm: NgForm;
  constructor(public router: Router) { }


  ngOnInit() {}

  onLogin() {
    localStorage.setItem('isLoggedin', 'true');
    localStorage.setItem('name', this.LoginForm.value.name )
    this.router.navigate(['/dashboard']);
  }
  

}
