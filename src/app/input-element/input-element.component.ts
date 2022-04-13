import { Component, OnInit, Input } from '@angular/core';
import { TOutput, TInput, TRule, SelectType } from '../myinterfaces';

@Component({
  selector: 'app-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.scss']
})
export class InputElementComponent implements OnInit {

  constructor() { }
  
  btypes: SelectType[] = [    
    {value: 'BTN', viewValue: 'Button'},
    {value: 'SW', viewValue: 'Switch'},
    {value: 'INVSW', viewValue: 'Inverted switch'},
  ];

  events: SelectType[] = [    
    {value: 'on', viewValue: 'On'},
    {value: 'off', viewValue: 'Off'},
    {value: 'toggle', viewValue: 'Toggle'},
  ];

  actions: SelectType[] = [    
    {value: 'on', viewValue: 'On'},
    {value: 'off', viewValue: 'Off'},
    {value: 'toggle', viewValue: 'Toggle'},
  ];

  ngOnInit(): void {
  }

  @Input() input!: TInput;
  @Input() outputs!: TOutput[];

  deleteRule(rule: any) {
    const index = this.input.rules.indexOf(rule);    
    if (index !== -1)
      this.input.rules.splice(index, 1);    
  }

  addRule() {
    let rule: TRule = {
      action: "on",
      duration: 0,
      event: "on",
      output: 0
    };
    this.input.rules.push(rule);
  }
}
