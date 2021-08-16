import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { TokenStorageService } from './services/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'CRM';
  data:any;
  private authData:Subscription;

  constructor(
    private _loginService:LoginService,
    private _router:Router,
    private tokenStorageService:TokenStorageService
    ){


    this.authData = _loginService.authData.subscribe((dt) => {
      this.data = dt
      console.log(this.data);
    });
  }

  ngOnInit(): void {


    if(localStorage.getItem("authendicated")){
      const authToken= localStorage.getItem("token");
      const authUserProfile= JSON.stringify(localStorage.getItem("userProfile"));

      this.data= {
        authendicated:true,
        token:authToken,
        userProfile:authUserProfile
      };
      this._router.navigateByUrl("/dashboard");
    }  
    else{
      this.data = {
        authendicated:false,
        token:"",
        userProfile:""
      };
    this._router.navigateByUrl("/login");
    }
}
  
logout(){
this.tokenStorageService.signOut();
this.data = {
  authendicated:false,
  token:"",
  userProfile:""
};
this._router.navigateByUrl("/login");
}
}
   

  
