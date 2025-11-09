import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
      userName: '',
      password: '',
  };

rouete = inject(Router);
  
  onLogin(){
     if(this.loginObj.userName =='admin' && this.loginObj.password=='admin')
    {
      this.rouete.navigateByUrl("/deshboard")
     }
     else
     {
      alert("Rong Password && User_Id")
     }
  }

     
}
