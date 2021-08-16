import { Component, Input, OnInit } from '@angular/core';
import { dlist, formData } from 'src/app/model/data-model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() formData:Array<formData>;
  @Input() editable:boolean;
  @Input() multicolumn:boolean;
  filteredList:dlist[] = [];
  constructor() {
      this.formData = [];
      this.editable = true;
      this.multicolumn = false;
   }
  ngOnInit() {
  }
  filterList(list:dlist[],event:{query:string}){
    let filtered : any[] = [];
    let query = event.query;
    for(let i = 0; i < list.length; i++) {
        let listItem:dlist = list[i];
        if (listItem.label?.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(listItem);
        }
    }
    this.filteredList = filtered;
  }
}
