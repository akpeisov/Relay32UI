import { Component } from '@angular/core';
import { RestServices } from './rest.services';
import { TDeviceInfo } from './myinterfaces';
import { Subscription } from 'rxjs';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
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

      constructor(private restService: RestServices) {
        // Observable.interval(1000).subscribe(x => { // will execute every 30 seconds
        //   //this.ionViewDidLoad();
        //   console.log("tick");
        // });
      }

      loadData() {
        // this.outputs$ = this.restService.getOutputs().pipe(
          // catchError(err => console.error(err));
          // catchError(error => {
          //   this.errorMessage = error;
          // });
        // );
        // this.outputs = this.restService.getOutputs().
        

        this.restService.getDeviceInfo().subscribe(data => {
          this.deviceInfo = data;          
        }, error => console.log(error));
      }

      ngOnInit() {
        console.log("application inited");
        this.loadData();
        
        setInterval(() => {         
          //replaced function() by ()=>
          this.loadData();
          // just testing if it is working
        }, 10000);

        // this.timerSubscription = timer(0, 100000).pipe( 
        //   map(() => { 
        //     console.log("tick");
        //     this.loadData(); // load data contains the http request 
        //   }) 
        // ).subscribe(); 

        
        // this.configService.sendGetRequest().subscribe((data: any[])=>{
        //   console.log(data);          
        // })  
      }
}

