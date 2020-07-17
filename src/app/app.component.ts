import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import * as lodash from 'lodash';
import { DatePipe } from '@angular/common';
import { environment } from "./../environments/environment"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent {
  title = 'Tezos blockchain - Angular';
  changeTitle(newTitle) {
    this.title = newTitle;
  }
  gridOptions: any = [];
  
  array = [];
  sum = 10;
  direction = '';
  rowId = '';
  constructor(private http: HttpClient, public datePipe: DatePipe) {
  }

  ngOnInit() {debugger
    let that = this;
    this.gridOptions = {
      colDefs: [
        // { name: '0' },
        { field: '2'},
        { field: '1', cellFn: rowData => that.datePipe.transform(new Date(rowData[1]), 'MMM-d-yyyy, hh:mm')},
        { field: '3', cellFn: rowData => rowData[3]},
        { field: '4', cellFn: rowData => rowData[4]},
      ]
    }
    this.getData();    
  }
  scrolled = true;
  onScrollDown() {
    if(this.scrolled == true){
      this.scrolled = false;
      let that = this;
      setTimeout(function () {
      const start = that.sum;
      that.sum += 10;
      that.direction = 'down';
      that.getData();
    }, 300);
    }
  }

  getData() { 
    this.http.get(environment.APIURL + (this.sum == 10 ? " " : "&cursor.lte=" + this.rowId)).subscribe((res) => {
      let dataArray = this;
      lodash.forEach(res, function (tag) {
        let temp = { "0": tag[0], "1": tag[1], "2": tag[2], "3": tag[3], "4": tag[4] }
        dataArray.array.push(temp);
      })
      
      this.rowId = this.array[this.array.length - 1][0]
      this.gridOptions.data = this.array;      
      this.scrolled = true;
    });
  }


  

}



