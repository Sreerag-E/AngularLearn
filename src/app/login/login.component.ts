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
   
   this.router.navigateByUrl('/home').then(e => {
    if (e) {
      console.log("Navigation is successful!");
    } else {
      console.log("Navigation has failed!");
    }
  });

  }

}
