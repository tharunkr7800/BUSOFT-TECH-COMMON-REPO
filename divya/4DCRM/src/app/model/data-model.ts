export interface input{
  type:string,
  label:string,
  placeholder:string,
  required:boolean,
  name:string,
  minlength?:string,
  maxlength?:string,
  list?:Array<dlist>,
  yearRange?:string
}
export interface dlist{
  label?:string | undefined,
  value?:string | undefined
}
export interface tabs{
  header: string,
  name: string,
  selected: boolean,
  icon: string
}
export interface formData{
    formData:[
      {
        section:string,
        fields:Array<input>
      }
    ],
  tabData:Array<tabs>
}
