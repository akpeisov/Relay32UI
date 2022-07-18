import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { RestServices } from './rest.services';
import { TDeviceInfo } from './myinterfaces';
import { Subscription } from 'rxjs';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  
  title = 'relay32-ui';
  errorMessage: string;
  
  deviceInfo: TDeviceInfo = {
    devicename: "unknown",
    freememory: 0,
    curdate: "today",
    uptime: "down",
    version: "0.0"
  }; // TODO : init of null???
     
  timerSubscription: Subscription; 

      constructor(private restService: RestServices,
                  private renderer: Renderer2) {
      }

      ngAfterViewInit() {
        let loader = this.renderer.selectRootElement('#loader');
        this.renderer.setStyle(loader, 'display', 'none');
      }

      loadData() {        
        this.restService.getDeviceInfo().subscribe(data => {
          this.deviceInfo = data;          
        }, error => console.log(error));
      }

      ngOnInit() {
        console.log("application inited");
        this.loadData();
        
        setInterval(() => {                   
          this.loadData();          
        }, 10000);
      }
}

