import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  createDialog:boolean;
  constructor() {
    this.createDialog = false;
  }
  createNote(){
    this.createDialog = true;
  }
  close(){
    this.createDialog = false;
  }
  ngOnInit() {
  }

}
