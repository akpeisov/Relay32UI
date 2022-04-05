import { Component, OnInit, Input } from '@angular/core';
import { TOutput } from '../toutput';

@Component({
  selector: 'app-output-element',
  templateUrl: './output-element.component.html',
  styleUrls: ['./output-element.component.scss']
})
export class OutputElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() output!: TOutput;

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
