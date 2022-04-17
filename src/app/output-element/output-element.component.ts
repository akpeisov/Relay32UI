import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { TOutput, SelectType } from '../myinterfaces';

@Component({
  selector: 'app-output-element',
  templateUrl: './output-element.component.html',
  styleUrls: ['./output-element.component.scss']
})
export class OutputElementComponent implements OnInit {

  constructor() { }

  outputTypes: SelectType[] = [    
    {value: 's', viewValue: 'Simple'},
    {value: 't', viewValue: 'On/off timer'},
    //{value: 'v', viewValue: 'Virtual'},
  ];

  defaultTypes: SelectType[] = [    
    {value: 'on', viewValue: 'On'},
    {value: 'off', viewValue: 'Off'},
    {value: 'last', viewValue: 'Last value'},
  ];

  //@Input() modbus: boolean;
  @Input() output!: TOutput;

  @Input() set modbus(value: boolean) {    
    // let o = this.outputTypes.find(e => e.value === 'v');
    // if (o != null) {
    //   o.disabled = !value      
    // }
  }
  
  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes.modbus.currentValue)       
  }

  ngOnInit(): void {
    
  }

  deleteOutput(): void {
    console.log("delete")
  }

}
