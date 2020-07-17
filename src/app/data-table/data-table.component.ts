import { Component, OnInit, OnChanges, Input, Output, EventEmitter, HostListener, ElementRef, ViewChild } from '@angular/core';
import { DataTableService } from '../data-table.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  
  template: `
  <div *ngFor="let col of gridOptions.colDefs">
  {{row[col.name]}}
  </div>
`
})

export class DataTableComponent implements OnInit {
@Input() gridOptions: any = [];
constructor(private DataTableService: DataTableService) {}


@Input() message: string; //1

  @Output() changeTitleEvent:EventEmitter<string> = new EventEmitter(); //2 

  @ViewChild('TEZOS blockchain - Angular') titleField: ElementRef;

  handleButtonClick(newTitle) {
    if(newTitle) {
      this.changeTitleEvent.emit(newTitle);
      this.titleField.nativeElement.value = '';
    } 
  }

ngOnInit() {
this.DataTableService.getAll().subscribe(gridOptions => this.gridOptions = gridOptions);
}



}


  