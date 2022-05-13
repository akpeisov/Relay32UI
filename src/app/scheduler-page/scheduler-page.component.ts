import { Component, OnInit } from '@angular/core';
import { RestServices } from '../rest.services';
import { TTask, TOutput, TInput } from '../myinterfaces';
import { NotifierService } from '../notifier.service';

@Component({
  selector: 'app-scheduler-page',
  templateUrl: './scheduler-page.component.html',
  styleUrls: ['./scheduler-page.component.scss']
})
export class SchedulerPageComponent implements OnInit {

  constructor(private restServices: RestServices,
              private notifierService: NotifierService) { }
  tasks: TTask[];
  outputs!: TOutput[];
  inputs!: TInput[];
  loading: boolean = true;

  ngOnInit(): void {
    this.restServices.getOutputs().subscribe(data => {
      this.outputs = data;                
      this.loading = false;
    }, error => console.log(error));
    this.restServices.getInputs().subscribe(data => {
      this.inputs = data;  
      this.loading = false;              
    }, error => console.log(error));
    this.restServices.getScheduler().subscribe(data => {
      this.tasks = data;   
      this.loading = false;      
    }, error => console.log(error));    
  }

  saveButton(): void {
    this.restServices.setScheduler(this.tasks).subscribe(data => {
      this.notifierService.showMessage('ok', 'ok');
    }, error => {
      console.log(error);
      this.notifierService.showMessage(error, 'error');
    }); 
  }

  addButton(): void {
    let task: TTask = {      
      name: "new task",
      grace: 0,
      time: 0,
      done: false,
      enabled: true,
      actions: [],
      dow: []
    };

    // let task: TTask;
    this.tasks.push(task);
  }

}
