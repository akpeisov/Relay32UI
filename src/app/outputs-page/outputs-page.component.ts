import { Component, OnInit } from '@angular/core';
import { TOutput } from '../myinterfaces';
import { RestServices } from '../rest.services';

@Component({
  selector: 'app-outputs-page',
  templateUrl: './outputs-page.component.html',
  styleUrls: ['./outputs-page.component.scss']
})
export class OutputsPageComponent implements OnInit {

  constructor(private restServices: RestServices) { }

  outputs!: TOutput[];
  interval: any;

  ngOnInit(): void {
    this.refreshData(); 
    // this.interval = setInterval(() => {         
    //   //replaced function() by ()=>
    //   this.refreshData();
    //   // just testing if it is working
    // }, 1000);
  }  

  ngOnDestroy() {
    // if (this.interval) {
    //   clearInterval(this.interval);
    // }
  }

  refreshData() {
    this.restServices.getOutputs().subscribe(data => {
      this.outputs = data;          
    }, error => console.log(error));
  }

  saveButton() {
    console.log("save")
    this.restServices.setOutputs(this.outputs).subscribe(data => {
      console.log(data);          
    }, error => console.log(error));
    // TODO : get error
  }
}