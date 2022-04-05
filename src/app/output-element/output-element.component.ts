import { Component, OnInit, Input } from '@angular/core';
import { TOutput, SelectType } from '../myinterfaces';

@Component({
  selector: 'app-output-element',
  templateUrl: './output-element.component.html',
  styleUrls: ['./output-element.component.scss']
})
export class OutputElementComponent implements OnInit {

  constructor() { }

  outputTypes: SelectType[] = [    
    {value: '', viewValue: 'Simple'},
    {value: 't', viewValue: 'On/off timer'},
    {value: 'v', viewValue: 'Virtual'},
    {viewValue: "test"}
  ];

  ngOnInit(): void {
  }

  @Input() output!: TOutput;
  //@Output() 
  
  // output = {
  //   id: 0,
  //   name: "output",
  //   type: "t",
  //   duration: 0,
  //   timer: 0,
  //   state: "on",
  //   on: 25,
  //   off: 1200
  // }
  
  // id = 0;
  // name = "Output";
}
