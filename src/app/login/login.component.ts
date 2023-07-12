import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 
  constructor( private router: Router){}
  
  onsubmit(){
   const storedName: string  = localStorage.getItem('username') ;
   const storedPw: string = localStorage.getItem('password');
    console.log(storedName);
    console.log(storedPw);
    const userName: HTMLInputElement = document.getElementById('userName') as HTMLInputElement;
    const userPw: HTMLInputElement = document.getElementById('Password') as HTMLInputElement;
    

    if (userName.value == "ppm" && userPw.value == "Qwert@12") {
      this.router.navigateByUrl('/home')
    } else {
        alert('Error on login Please Try Again');
    }
  }
}
