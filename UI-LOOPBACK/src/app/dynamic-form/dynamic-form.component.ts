import { Component, OnInit } from '@angular/core';
interface dropdownDataType{
  label:string,
  value:string
}
interface formDataType{
  type:string,
  validate:boolean,
  label:string,
  user:string,
  required:boolean,
  value:string,
  placeholder:string,
  option:Array<dropdownDataType>
}
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})

export class DynamicFormComponent implements OnInit {
  formData:Array<formDataType>=[];
  filteredList:Array<dropdownDataType>;
  count:any;
  constructor() {
    this.count = ['1','2','3','4']
    this.formData = [

      {
          type:"text",
          validate:true,
          label:"First name",
          user:"admin",
          required:true,
          value:"",
          placeholder:"First name",
          option:[]
      },
      {
          type:"text",
          validate:true,
          label:"Last name",
          user:"admin",
          required:true,
          value:"",
          placeholder:"Last name",
          option:[]
      },
      {
          type:"text",
          validate:true,
          label:"Office phone",
          user:"admin",
          required:true,
          value:"",
          placeholder:"Office phone",
          option:[]
      },
      {
          type:"text",
          validate:true,
          label:"Home phone",
          user:"admin",
          required:true,
          value:"",
          placeholder:"Home phone",
          option:[]
      },
      {
          type:"dropdown",
          validate:true,
          label:"People type",
          user:"admin",
          required:true,
          value:"",
          placeholder:"People type",
          option:[{
                  label:"Internal user",value:"Internal user"
                  },
                  {
                    label:"End user",value:"End user"
              }]
      }
  ]
  console.log(this.formData)

  this.filteredList = [];
  }
  filterList(list:dropdownDataType[],event:{query:string}){
    console.log(list);
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
  ngOnInit(): void {
  }

}
