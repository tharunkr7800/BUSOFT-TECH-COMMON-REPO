import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {
  toggle:boolean = false;
  constructor(private _router:Router) { }
  onSelect(path:string){
    let name =  undefined;
    this._router.navigate([path,{contactInfo:name}]);
  }
  ngOnInit(): void {
    this.toggleMenu();
  }
  toggleMenu(){
    this.toggle = !this.toggle;
    let body: HTMLBodyElement = document.querySelector("body") as HTMLBodyElement;
    if(this.toggle){
      body.classList.add("collapsed");
    }else{
      body.classList.remove("collapsed");
    }
  }
}
