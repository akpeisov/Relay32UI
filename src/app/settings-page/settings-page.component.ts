import { Component, OnInit } from '@angular/core';
import { RestServices } from '../rest.services';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { SelectType, TMBSlave, TSettings } from '../myinterfaces';
import { NotifierService } from '../notifier.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})

export class SettingsPageComponent implements OnInit {
  //settings: any;
  settings: TSettings;
  loading: boolean = true;
  constructor(private restServices: RestServices,
              private notifierService: NotifierService) { }              

  ngOnInit(): void {
    this.restServices.getNetwork().subscribe(data => {
      this.settings = <TSettings>data;
      this.loading = false;    
      // console.log(this.settings)
      
      if (this.settings.rlog == null) {
        this.settings.rlog = {}
        this.settings.rlog.enabled = false
      }
      
      if (this.settings.modbus == null) {      
        this.settings.modbus = {}
        this.settings.modbus.enabled = false
        this.settings.modbus.mode = "none"
      }

      if (this.settings.mqtt == null) {
        this.settings.mqtt = {}
        this.settings.mqtt.enabled = false
      }

      if (this.settings.ftp == null) {
        this.settings.ftp = {}
        this.settings.ftp.enabled = false
      }
    
    }, error => console.log(error));    
  }

  ipFormControl = new FormControl('', [Validators.required,
                                          Validators.pattern('(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)')]);
  matcher = new MyErrorStateMatcher();

  saveButton() {
    this.restServices.setNetwork(this.settings).subscribe(data => {
      //this.settings = <TSettings>data;          
      this.notifierService.showMessage('ok', 'ok');      
    }, error => {
      this.notifierService.showMessage(error, 'error');
      console.log(error)
    });
  }

  modbusModes: SelectType[] = [        
    {value: 'master', viewValue: 'Master'},
    {value: 'slave', viewValue: 'Slave'},
  ];

  modbusTypes: SelectType[] = [        
    {value: 'RTU', viewValue: 'RTU'},
    {value: 'TCP', viewValue: 'TCP'},
  ];

  addSlaveBtn() {
    // find last id
    let id = 0;
    if (this.settings.modbus.slaves == null)
      this.settings.modbus.slaves = [];

    this.settings.modbus.slaves?.forEach(slave => {
      if (slave.id > id)
        id = slave.id
    });

    let item:TMBSlave = {      
      id: id+1
    };
    this.settings.modbus.slaves?.push(item)
  }

  delSlaveBtn(slave: TMBSlave) {
    const index = this.settings.modbus.slaves?.indexOf(slave);    
    if (index !== -1)
      this.settings.modbus.slaves?.splice(index!, 1);    
  }
}
