import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserData } from '../../../core/model/user-data';
// import { UserDataStore } from '../../../core/user/userdata.store';
// import { Observable } from 'rxjs';
// import { Router } from '@angular/router';
// import { UserDataService } from '../../../core/user-data.service';
// import { PersonalBookmarksService } from '../../../core/personal-bookmarks.service';

interface dlist {
  label: string,
  value: string
};
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})

export class AddNewUserComponent implements OnInit {
  status:dlist[];
  profile: dlist[];
  filteredList: dlist[] = [];
  uploadedFiles: any[] = [];

  constructor() {
    this.status = [
      {label:'Active', value:'active'},
      {label:'Inactive', value:'inactive'}
    ]
    this.profile =[
      { label: 'Agent', value:'agent'},
      { label: 'Admin', value:'admin'},
      { label: 'Manager', value:'manager'}
    ]
  }

  filterList(list:dlist[],event:{query:string}){
    let filtered : any[] = [];
    let query = event.query;
    for(let i = 0; i < list.length; i++) {
        let listItem = list[i];
        if (listItem.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(listItem);
        }
    }
    this.filteredList = filtered;
  }


  onUpload(event:{files:[]}) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    //this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
}

  // userProfileForm: FormGroup;

  profileImageChangedStatus = 'init';
  uploadImageLabel = 'Choose file (max size 1MB)';
  imageFileIsTooBig = false;
  // selectedFileSrc: string;

  ngOnInit(): void {
  }

}
