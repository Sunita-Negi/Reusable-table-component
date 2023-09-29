import { Component } from '@angular/core';
import { TableConfig } from './tableConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
 tableHeader= TableConfig.tableHeader;
 
  tableData = [{id: 1, name: 'Sunita', last:'Negi', number:123,address:'Infosys',country:'India'}, 
  {id: 2, name: 'Sunita', last:'123',number:123,address:'Infosys1',country:'India'},
  {id: 3, name: 'Somya', last:'123',number:123,address:'Infosys2',country:'China'},
  {id: 4, name: 'Ram', last:'Negi', number:123,address:'Infosys3',country:'China'}, 
  {id: 5, name: 'Rahul', last:'123',number:123,address:'Infosys4',country:'China'},
  {id: 6, name: 'Soni', last:'123',number:123,address:'Infosys5',country:'China'},
  {id: 7, name: 'Sunita', last:'Negi', number:123,address:'Infosy6',country:'India'}, 
  {id: 8, name: 'Sunita', last:'123',number:123,address:'Infosys7',country:'India'},
  {id: 9, name: 'Somya', last:'123',number:123,address:'Infosys8',country:'India'},
  {id: 10, name: 'Sunita', last:'Negi', number:123,address:'Infosys',country:'India'}, 
  {id: 11, name: 'Rahul', last:'123',number:123,address:'Infosys1',country:'India'},
  {id: 12, name: 'Somya', last:'123',number:123,address:'Infosys2',country:'India'},
  {id: 13, name: 'Sunita', last:'Negi', number:123,address:'Infosys',country:'India'}, 
  {id: 14, name: 'Sunita', last:'123',number:123,address:'Infosys1',country:'India'},
  {id: 15, name: 'Somya', last:'123',number:123,address:'Infosys2',country:'China'},
  {id: 16, name: 'Ram', last:'Negi', number:123,address:'Infosys3',country:'China'}, 
  {id: 17, name: 'Rahul', last:'123',number:123,address:'Infosys4',country:'China'},
  {id: 18, name: 'Soni', last:'123',number:123,address:'Infosys5',country:'China'},
  {id: 19, name: 'Somya', last:'123',number:123,address:'Infosys8',country:'India'},
  {id: 20, name: 'Sunita', last:'Negi', number:123,address:'Infosys',country:'India'}, 
  {id: 21, name: 'Rahul', last:'123',number:123,address:'Infosys1',country:'India'},
  {id: 22, name: 'Sunita', last:'123',number:123,address:'Infosys1',country:'India'},
  {id: 23, name: 'Somya', last:'123',number:123,address:'Infosys2',country:'China'},
  {id: 24, name: 'Ram', last:'Negi', number:123,address:'Infosys3',country:'China'}, 
  {id: 25, name: 'Rahul', last:'123',number:123,address:'Infosys4',country:'China'},
  {id: 26, name: 'Soni', last:'123',number:123,address:'Infosys5',country:'China'},
  {id: 27, name: 'Sunita', last:'Negi', number:123,address:'Infosy6',country:'India'}, 
  {id: 28, name: 'Sunita', last:'123',number:123,address:'Infosys7',country:'India'},
  {id: 29, name: 'Somya', last:'123',number:123,address:'Infosys8',country:'India'},
  {id: 30, name: 'Sunita', last:'Negi', number:123,address:'Infosys',country:'India'}, 
  {id: 31, name: 'Rahul', last:'123',number:123,address:'Infosys1',country:'India'},
  {id: 32, name: 'Somya', last:'123',number:123,address:'Infosys2',country:'India'},
 {id: 33, name: 'Sunita', last:'123',number:123,address:'Infosys1',country:'India'},
  {id: 34, name: 'Somya', last:'123',number:123,address:'Infosys2',country:'China'},
  ]


deletedataAction(data:any){
  console.log(data);
  this.tableData = this.tableData.filter(value=> value.id !=data.id);
}

editDataAction(data:any){
  console.log(data,"data")
}

saveDataAction(data:any){
  alert(JSON.stringify(data));
}

}