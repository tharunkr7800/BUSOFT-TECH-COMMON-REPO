import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-threads',
  templateUrl: './message-threads.component.html',
  styleUrls: ['./message-threads.component.scss']
})
export class MessageThreadsComponent implements OnInit {
  htmlMessages:string;
  constructor() {
    this.htmlMessages = "Hi,<br />This is closing under 20001-20001.<br />--<b>Tim <br />Support Engineer</b>";
   }
  ngOnInit() {
  }
  openAttachement(path:string){
    window.open(path);
  }
}
