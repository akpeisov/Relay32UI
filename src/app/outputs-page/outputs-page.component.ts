import { Component, OnInit } from '@angular/core';
import { TOutput } from '../myinterfaces';
import { NotifierService } from '../notifier.service';
import { RestServices } from '../rest.services';

@Component({
  selector: 'app-outputs-page',
  templateUrl: './outputs-page.component.html',
  styleUrls: ['./outputs-page.component.scss']
})
export class OutputsPageComponent implements OnInit {

  constructor(private restServices: RestServices,
              private notifierService: NotifierService) { }

  outputs!: TOutput[];
  interval: any;
  settings!: any;
  modBusMaster: boolean = false
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
    this.restServices.getOutputs().subscribe(data => {
      this.outputs = data;          
      this.loading = false;
    }, error => console.log(error));

    this.restServices.getNetwork().subscribe(data => {
      this.settings = data;        
    if ((this.settings.modbus != null) && (this.settings.modbus.mode === "master"))
      this.modBusMaster = true
    // console.log("111 ", this.modBusMaster)  
    }, error => console.log(error));
    
  }

  saveButton() {
    this.restServices.setOutputs(this.outputs).subscribe(data => {
      // console.log(data);          
      this.notifierService.showMessage('ok', 'ok');
    }, error => {
      console.log(error);
      this.notifierService.showMessage(error, 'error');
    }); 
    // TODO : get error
  }

  addOutput() {
    console.log("add")    
    let output: TOutput = {
      type: 'v',
      rid: 0,
      slaveid: 1,
      name: "New virtual out",
      default: "off"
    }
    this.outputs.push(output);
  }
}
