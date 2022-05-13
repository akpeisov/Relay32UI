import { Component, OnInit } from '@angular/core';
import { TInput, TOutput } from '../myinterfaces';
import { NotifierService } from '../notifier.service';
import { RestServices } from '../rest.services';

@Component({
  selector: 'app-inputs-page',
  templateUrl: './inputs-page.component.html',
  styleUrls: ['./inputs-page.component.scss']
})
export class InputsPageComponent implements OnInit {

  constructor(private restServices: RestServices,
              private notifierService: NotifierService) { }

  inputs!: TInput[];
  outputs!: TOutput[];
  interval: any;
  loading: boolean = true;

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
      this.loading = false;
    }, error => {
      console.log(error);
      this.notifierService.showMessage(error, 'error');
    });
    this.restServices.getOutputs().subscribe(data => {
      this.outputs = data; 
      this.loading = false;         
    }, error => {
      console.log(error);
      this.notifierService.showMessage(error, 'error');
    });    
  }

  saveButton() {
    console.log("save")
    this.restServices.setInputs(this.inputs).subscribe(data => {
      console.log(data);
      this.notifierService.showMessage('ok', 'ok');
    }, error => {
      console.log(error);
      this.notifierService.showMessage(error, 'error');
    });    
    // TODO : get error
  }

}
