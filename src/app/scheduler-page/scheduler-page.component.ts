import { Component, OnInit } from '@angular/core';
import { RestServices } from '../rest.services';
import { TTask, TOutput } from '../myinterfaces';

@Component({
  selector: 'app-scheduler-page',
  templateUrl: './scheduler-page.component.html',
  styleUrls: ['./scheduler-page.component.scss']
})
export class SchedulerPageComponent implements OnInit {

  constructor(private restServices: RestServices) { }
  tasks: TTask[];
  outputs!: TOutput[];

  ngOnInit(): void {
    this.restServices.getOutputs().subscribe(data => {
      this.outputs = data;                
    }, error => console.log(error));
    this.restServices.getScheduler().subscribe(data => {
      this.tasks = data;         
    }, error => console.log(error));    
  }

  saveButton(): void {
    this.restServices.setScheduler(this.tasks).subscribe(data => {
      console.log(data);          
    }, error => console.log(error));
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
