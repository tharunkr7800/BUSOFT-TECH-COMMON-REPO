import { Component, Input, OnInit } from '@angular/core';
import { Auth, LoginService } from './../services/login.service';
import {Router} from '@angular/router';
import { Password } from 'primeng/password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  loginService:any;
  showLogin:boolean = true;
  passwordError:boolean = false;
  usernameError:boolean = false;
  username:string = "";
  password:string = "";
  displayModel:boolean = false;

  @Input() loginUserData={
    "email": "" ,
    "password": ""
  };
  errorMessage: any;
  

  constructor(private _loginServices:LoginService,private _router:Router) { 
  }

  ngOnInit(): void {

  }
  reset(e:MouseEvent){
    e.preventDefault();
    this.showLogin = !this.showLogin;
  }
  back(e:MouseEvent){
    e.preventDefault();
    this.showLogin = !this.showLogin;
  }
  validateLogin(){
    (this.loginUserData.email=='')? this.usernameError = true: this.usernameError = false;
    (this.loginUserData.password=='')? this.passwordError = true: this.passwordError = false;
    if(this.usernameError || this.passwordError){
      return true;
    }else{
      return false;
    }
  }


  login(){

    //For authentication purpose (Indication for user log-in status)
    let AuthData = 
    {
      token:"",
      authendicated:false,
      userProfile: ""
    };
    
    // if(!this.validateLogin()){

      console.log(this.loginUserData);
      this._loginServices.loginUser(this.loginUserData)
      .subscribe(
        data => {
          // we get the userProfile and token as response 

          const name=data.userprofile.name;
          const email=data.userprofile.email;
          const id=data.userprofile.id;
          const role=data.userprofile.role;

          //storing the token and userProfile details in local storage for future use
        localStorage.setItem("authendicated","true");
        localStorage.setItem("token",data.token);
        localStorage.setItem("email",email);
        localStorage.setItem("username",name);
        localStorage.setItem("id",id);
        localStorage.setItem("role",role);
      
        AuthData.authendicated = true;
        AuthData.token = data.token;
        AuthData.userProfile = data.userprofile;

        //The nav bar should be displayed only if authenticated. Here nagvigation happens forst and then the local storage of of authenticaton .
        //Need to make this work synchronously . Need to navigate after local storage is updated .For temporay solution , reloading the page

        window.location.reload();

        this._router.navigateByUrl('/dashboard');
      
      
        },
        
        err=>{
          this.errorMessage = err.error.message;
          console.log(this.errorMessage);
          window.alert("Invalid Email/Password");
          //Displaying error messages
          this.displayModel = true;
          return;
        })
      
    }
  }
// }
