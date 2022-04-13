import { Component, Input, OnInit } from '@angular/core';
import { SelectType, TAction, TOutput, TTask } from '../myinterfaces';

@Component({
  selector: 'app-scheduler-element',
  templateUrl: './scheduler-element.component.html',
  styleUrls: ['./scheduler-element.component.scss']
})
export class SchedulerElementComponent implements OnInit {

  constructor() { }

  @Input() task!: TTask;
  @Input() outputs!: TOutput[];

  actions: SelectType[] = [    
    {value: 'on', viewValue: 'On'},
    {value: 'off', viewValue: 'Off'},
    {value: 'toggle', viewValue: 'Toggle'},
  ];
  
  private timeToNum(time: any): number {
    let t = time.split(":");        
    return +t[0]*60 + +t[1];
  }

  private numToTime(num: number): any {
    if (num == null)
      return "0:00"
    return (num / 60 | 0).toString() + ":" + (num - 60*(num / 60 | 0)).toString()
  }

  ngOnInit(): void {
    // this.time = (this.task.time / 60 | 0).toString() + ":" + (this.task.time - 60*(this.task.time / 60 | 0)).toString()
    this.time = this.numToTime(this.task.time)    
    this.graceTime = this.numToTime(this.task.grace)
  }

  addAction(): void {
    let action: TAction = {      
      action: "on",
      duration: 0,
      output: 0
    };    
    this.task.actions.push(action);
  }

  deleteAction(action: any): void {
    const index = this.task.actions.indexOf(action);    
    if (index !== -1)
      this.task.actions.splice(index, 1);    
  }

  time: string;
  graceTime: string;
  timeChanged(): void {
    // console.log(this.time)
    // let t = this.time.split(":");        
    this.task.time = this.timeToNum(this.time)//+t[0]*60 + +t[1];
  }
  graceTimeChanged(): void {
    this.task.grace = this.timeToNum(this.graceTime)//+t[0]*60 + +t[1];
  }
}
