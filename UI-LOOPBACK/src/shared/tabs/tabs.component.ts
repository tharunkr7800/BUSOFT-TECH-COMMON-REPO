import { Component, Input, OnInit } from '@angular/core';
import { tabs } from 'src/app/model/data-model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() tabData:Array<tabs>;
  constructor() {
    this.tabData = []
   }

  ngOnInit() {
  }

}
