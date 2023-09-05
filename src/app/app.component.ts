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
  {id: 12, name: 'Somya', last:'123',number:123,address:'Infosys2',country:'India'}]


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