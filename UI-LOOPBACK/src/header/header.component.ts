import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AppComponent } from '../app.component';
import {TokenStorageService} from '../services/token-storage.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  constructor(
    private tokenStorageService:TokenStorageService,
    private appComponent:AppComponent
  ) {
    this.items = [
      {label: 'Profile', icon: 'pi pi-user'},
      {label: 'Settings', icon: 'pi pi-sliders-v'},
      {label: 'Logout', icon: 'pi pi-power-off', routerLink:'/login',command:(onclick) =>
      {  
        this.tokenStorageService.signOut();
        appComponent.logout()
     }}
    ];
   }

  ngOnInit(): void {
  }

}
