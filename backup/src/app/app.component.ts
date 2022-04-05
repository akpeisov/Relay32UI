import { Component } from '@angular/core';
import { ConfigService } from './config.service';
import { TOutput } from './toutput';
import { catchError } from 'rxjs';
import { Observable, Subscription, timer, map} from 'rxjs';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'relay32-ui';
  errorMessage: string;
  // outputs: Output[] = [];
  outputs$: Observable<TOutput[]>;

  // outputs1 = [
  //         {
  //     "id": 0,
  //     "name": "out 0",
  //     "duration": 0,
  //     "state": "on",
  //     "timer": 0
  //     }]
     
  timerSubscription: Subscription; 

      constructor(private configService: ConfigService) {
        // Observable.interval(1000).subscribe(x => { // will execute every 30 seconds
        //   //this.ionViewDidLoad();
        //   console.log("tick");
        // });
      }

      loadData() {
        this.outputs$ = this.configService.getOutputs().pipe(
          // catchError(error => {
          //   this.errorMessage = error;
          // });
        );
      }

      ngOnInit() {
        console.log("application inited");
        this.loadData();

        this.timerSubscription = timer(0, 10000).pipe( 
          map(() => { 
            console.log("tick");
            this.loadData(); // load data contains the http request 
          }) 
        ).subscribe(); 

        
        // this.configService.sendGetRequest().subscribe((data: any[])=>{
        //   console.log(data);          
        // })  
      }
}

