import { Component, OnInit } from '@angular/core';
import { TInput, TOutput } from '../myinterfaces';
import { RestServices } from '../rest.services';

@Component({
  selector: 'app-inputs-page',
  templateUrl: './inputs-page.component.html',
  styleUrls: ['./inputs-page.component.scss']
})
export class InputsPageComponent implements OnInit {

  constructor(private restServices: RestServices) { }

  inputs!: TInput[];
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
    this.restServices.getInputs().subscribe(data => {
      this.inputs = data;          
    }, error => console.log(error));
    this.restServices.getOutputs().subscribe(data => {
      this.outputs = data;          
    }, error => console.log(error));    
  }

  saveButton() {
    console.log("save")
    this.restServices.setInputs(this.inputs).subscribe(data => {
      console.log(data);          
    }, error => console.log(error));
    // TODO : get error
  }

}
