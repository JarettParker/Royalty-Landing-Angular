import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  gotChecks = false;

  constructor(private http: Http){}


  onSignup(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
  }

  getChecks() {
    this.http.get('https://royalty-test-backend.firebaseio.com/checks.json')
      .subscribe(
        (response:Response) => {
          console.log(response)
          this.gotChecks = true;
        }
      );
  }
}
