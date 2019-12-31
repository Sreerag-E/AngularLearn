import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  ngOnInit() {
  }

  constructor(private router: Router) {
  }
 
 
  login(form: { value: any; email: string; password: string; }){
    console.log(form.value.email);
    alert("inside login "+form.value.email);
    alert("inside password "+form.value.password);
    this.router.navigateByUrl('/product-list');

  }

}
