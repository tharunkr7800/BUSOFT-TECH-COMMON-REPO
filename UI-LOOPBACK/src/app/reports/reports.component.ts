import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  activeBtn:string;
  constructor() {
    this.activeBtn = "people";
  }
  onSelect(btn:string){
    if(btn=='people'){
      this.activeBtn = 'people';
    }else if(btn=='interactions'){
      this.activeBtn = 'interactions';
    }else{
      this.activeBtn = 'agents';
    }
  }
  ngOnInit(): void {
  }

}
