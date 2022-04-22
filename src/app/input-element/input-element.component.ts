import { Component, OnInit, Input } from '@angular/core';
import { TOutput, TInput, TRule, SelectType, TACL } from '../myinterfaces';

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
    // {value: 'toggle', viewValue: 'Toggle'},
  ];

  acltypes: SelectType[] = [    
    {value: 'allow', viewValue: 'Allow'},
    {value: 'deny', viewValue: 'Deny'},    
  ];

  acliotypes: SelectType[] = [    
    {value: 'o', viewValue: 'Output'},
    {value: 'i', viewValue: 'Input'},    
  ];

  actions: SelectType[] = [    
    {value: 'on', viewValue: 'On'},
    {value: 'off', viewValue: 'Off'},
    {value: 'toggle', viewValue: 'Toggle'},
    {value: 'allOff', viewValue: 'All off'},
  ];

  ngOnInit(): void {
  }

  private _input: TInput;
  //@Input() input!: TInput;
  @Input() outputs!: TOutput[];
  @Input() inputs!: TInput[];

  @Input() set input(value: TInput) {  
    this._input = value
    // let o = this.events.find(e => e.value === 'on');
    // if (o != null) {
    //   o.disabled = value.type != 'BTN'
    // }    
    // console.log("setter ", this.input)
  }
  get input(): TInput {
    return this._input;
  }

  deleteRule(rule: TRule) {
    const index = this.input.rules.indexOf(rule);    
    if (index !== -1)
      this.input.rules.splice(index, 1);    
  }

  addRule() {
    let rule: TRule = {
      action: "on",
      duration: 0,
      event: this.input.type == 'SW' ? "on" : "toggle",
      output: 0
    };
    this.input.rules.push(rule);
  }

  addAcl(rule: TRule) {
    let acl: TACL = {
      type: "allow",
      id: 0,
      io: "i",
      state: "off"
    }
    const index = this.input.rules.indexOf(rule);    
    if (this.input.rules[index].acl == null) {
      this.input.rules[index].acl = []      
    }      
    this.input.rules[index].acl?.push(acl)
  }

  deleteAcl(rule: TRule, acl: TACL) {    
    // const rindex = this.input.rules.indexOf(rule);    
    // const aindex = this.input.rules[rindex].acl?.indexOf(acl)
    // console.log(rindex, " ", aindex, " ", acl)    
    // if (aindex !== -1)    
    //   this.input.rules[rindex].acl?.splice(aindex!, 1)    
    const index = rule.acl?.indexOf(acl)        
    if (index !== -1)
       rule.acl?.splice(index!, 1)  
  }
}
