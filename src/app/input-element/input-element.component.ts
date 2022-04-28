import { Component, OnInit, Input } from '@angular/core';
import { TOutput, TInput, TRule, SelectType, TACL, TAction } from '../myinterfaces';

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

  ruletypes: SelectType[] = [    
    {value: 'chain', viewValue: 'Chain'},
    {value: 'c', viewValue: 'Common'},    
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

  actiontypes: SelectType[] = [    
    {value: 'c', viewValue: 'Common'},
    {value: 'w', viewValue: 'Wait'},
  ];

  ngOnInit(): void {
  }

  private _input: TInput;
  //@Input() input!: TInput;
  @Input() outputs!: TOutput[];
  @Input() inputs!: TInput[];

  @Input() set input(value: TInput) {  
    value.rules.forEach(rule => {
      if (rule.type == null)
        rule.type = 'c'
    })   
    
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
      output: 0,
      type: "c"
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

  deleteChainRuleAction(rule: TRule, action: TAction) {    
    const index = rule.actions?.indexOf(action)        
    if (index !== -1)
       rule.actions?.splice(index!, 1)  
  }

  getChainRuleActionNextId(actions: TAction[]): number {
    let maxId = -1;
    if (actions == null || actions.length == 0)
      return 0;
    actions.forEach(action => {
      if (action.id! > maxId) {
        maxId = action.id!;
      }
    });
    return maxId+1
  }

  addChainRuleAction(rule: TRule) {
    let action: TAction = {
      action: "on",
      output: 0,
      type: "c", 
      id: this.getChainRuleActionNextId(rule.actions!)
    }
    
    if (rule.actions == null)
      rule.actions = []
    rule.actions?.push(action)
  }
}
