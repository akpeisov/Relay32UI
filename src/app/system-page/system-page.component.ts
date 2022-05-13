import { Component, OnInit } from '@angular/core';
import { NotifierService } from '../notifier.service';
import { DialogService } from '../dialog.service';
import { RestServices } from '../rest.services';

@Component({
  selector: 'app-system-page',
  templateUrl: './system-page.component.html',
  styleUrls: ['./system-page.component.scss']
})
export class SystemPageComponent implements OnInit {

  constructor(private notifierService: NotifierService,
              private dialogService: DialogService,
              private restServices: RestServices) { }
  
              ngOnInit(): void {
  }

  rebootBtn(): void {    
    this.dialogService.confirmDialog("Are you sure to reboot device?").subscribe(dialogResult => {        
        if (dialogResult) {
          this.restServices.rebootDevice()
          this.notifierService.showMessage("Device will be rebooted soon!", 'ok')
        }
    });
  }

  upgradeBtn(): void {
    this.dialogService.confirmDialog("Are you sure to upgrade device?").subscribe(dialogResult => {        
      if (dialogResult) {
        this.restServices.upgradeDevice()
        this.notifierService.showMessage("Upgrade process run...", 'ok')
      }
  });
  }
}



