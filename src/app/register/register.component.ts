import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor( private router: Router){}
  
  store(){

    const name: HTMLInputElement = document.getElementById('username') as HTMLInputElement;
    const pw: HTMLInputElement = document.getElementById('password') as HTMLInputElement;
    const firstname: HTMLInputElement = document.getElementById('firstname') as HTMLInputElement;
    const lastname: HTMLInputElement = document.getElementById('lastname') as HTMLInputElement;
    const email: HTMLInputElement = document.getElementById('email') as HTMLInputElement;
    const tel: HTMLInputElement = document.getElementById('tel') as HTMLInputElement;
    const lowerCaseLetters: RegExp = /[a-z]/g;
    const upperCaseLetters: RegExp = /[A-Z]/g;
    const numbers: RegExp = /[0-9]/g;

    if (name.value.length == 0) {
        alert('Please fill in Username');

    } else if (pw.value.length == 0) {
        alert('Please fill in password');

    }
    else if (firstname.value.length == 0) {
      alert('Please fill in first Name');

  }
  else if (email.value.length == 0) {
    alert('Please fill in Email');

} else if (name.value.length == 0 && pw.value.length == 0) {
        alert('Please fill in email and password');

    } else if (pw.value.length > 8) {
        alert('Max of 8');

    } else if (!pw.value.match(numbers)) {
        alert('please add 1 number');

    } else if (!pw.value.match(upperCaseLetters)) {
        alert('please add 1 uppercase letter');

    } else if (!pw.value.match(lowerCaseLetters)) {
        alert('please add 1 lovercase letter');

    } else {
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        localStorage.setItem('firstname', firstname.value);
        localStorage.setItem('lastname', lastname.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('tel', tel.value);

        this.router.navigateByUrl('/login');
    }
}

}
