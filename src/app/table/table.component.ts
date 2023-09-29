import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, combineLatest, of } from "rxjs";
import { map } from "rxjs/operators";
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  private subscription: Subscription;
  p= 1;
  public count: number = 0;
  @Input() tableHeader: any = [];

  @Input() tableData: any = [];
  @Output() deleteDataAction = new EventEmitter<string>();
  @Output() saveDataAction = new EventEmitter<string>();
  @Output() editDataAction = new EventEmitter<string>();

  ngOnInit() {
    this.subscription = interval(1000).subscribe(() => {
      this.count++;
    });
  }

  deleteData(data:any){
    this.deleteDataAction.emit(data);
  }

  editData(data:any){
    this.editDataAction.emit(data);
  }
  saveData(data:any){
    this.saveDataAction.emit(data);
  }



  ngOnDestroy() {
    console.log('CounterComponent destroyed');
  }


}


