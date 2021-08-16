import { Component, OnInit } from '@angular/core';
import { dlist } from 'src/app/model/data-model';
import { FileExportService } from './../../services/file-export.service';
export interface contact{
  refno:string,
  subject:string,
  assigned:string,
  category:string,
  createdon:string,
  reason:string,
  closure:string
}
@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {

  contacts: contact[];
  cols: any[];
  selectedColumns: any[];
  filteredList:dlist[];
  category:dlist[];
  callReason:dlist[];
  closureReason:dlist[];
  cat:string = '';
  clr:string = '';
  csr:string = '';
  showReport:boolean = false;
  constructor(private fileSaver:FileExportService) {
    this.contacts = [];
    this.cols = [];
    this.selectedColumns = [];
    this.filteredList = [];
    this.closureReason = [
      {
        label:"Closure reason 1",
        value:"closure reason 1"
      },
      {
        label:"Closure reason 2",
        value:"closure reason 1"
      },
      {
        label:"Closure reason 3",
        value:"closure reason 1"
      },
      {
        label:"Closure reason 4",
        value:"closure reason 1"
      }
    ]
    this.callReason =[
      {
        label:"Reason for call 1",
        value:"Reason for call"
      },
      {
        label:"Reason for call 2",
        value:"Reason for call"
      },
      {
        label:"Reason for call 3",
        value:"Reason for call"
      },
      {
        label:"Reason for call 4",
        value:"Reason for call"
      },
      {
        label:"Reason for call 5",
        value:"Reason for call"
      }
    ]
    this.category = [
      {
        "label": "Gategory 1",
        "value": "1"
      },
      {
        "label": "Gategory 2",
        "value": "2"
      },
      {
        "label": "Gategory 3",
        "value": "3"
      },
      {
        "label": "Gategory 4",
        "value": "4"
      }
    ]
  }
  generateReport(){
    if(this.cat){
      this.selectedColumns.push(
        { field: 'category', header: 'Category' }
      )
    }
    if(this.clr){
      this.selectedColumns.push(
        { field: 'reason', header: 'Reason' }
      )
    }
    if(this.csr){
      this.selectedColumns.push(
        { field: 'closure', header: 'Closure'}
      )
    }
    this.showReport = true;
  }
  exportExcel(){
    this.fileSaver.exportExcel(this.contacts,'contacts');
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
  ngOnInit() {
    this.contacts = [
      {
        refno:'cx0001',
        subject:'payment process issue',
        assigned:'John Peter',
        category:'Payment',
        createdon:'12/07/2020T10:10:01',
        reason:'Payment failure',
        closure:'Issue Resolved'
      },
      {
        refno:'cx0002',
        subject:'payment process issue',
        assigned:'Benjamin Stew',
        category:'Payment',
        createdon:'12/07/2020T10:10:01',
        reason:'Payment failure',
        closure:'Issue Resolved'
      },
      {
        refno:'cx0003',
        subject:'Delivery issue',
        assigned:'John Peter',
        category:'Delivery',
        createdon:'12/07/2020T10:10:01',
        reason:'Address not clear',
        closure:'Issue Resolved'
      },
      {
        refno:'cx0004',
        subject:'Product deffect',
        assigned:'John Peter',
        category:'Product',
        createdon:'12/07/2020T10:10:01',
        reason:'Product replacement',
        closure:'Issue Resolved'
      },
      {
        refno:'cx0005',
        subject:'payment process issue',
        assigned:'John Peter',
        category:'Payment',
        createdon:'12/07/2020T10:10:01',
        reason:'Payment failure',
        closure:'Issue Resolved'
      }
    ];
    this.cols = [
      { field: 'category', header: 'Category' },
      { field: 'reason', header: 'Reason' },
      { field: 'closure', header: 'Closure'}

  ];
  }

}
