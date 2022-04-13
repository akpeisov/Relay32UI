import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TOutput, TInput, TDeviceInfo } from './myinterfaces';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class RestServices {
  constructor(private http: HttpClient) { }

  // urlPrefix = '/services/device' ;//'/api'

  outputsUrl = '/service/config/outputs';
  inputsUrl = '/service/config/inputs';
  infoUrl = '/ui/deviceInfo'; //'/api/deviceInfo';
  networkUrl = 'service/config/network';
  schedulerUrl = '/service/config/scheduler'

  public getOutputs(): Observable<TOutput[]> {
    return this.http.get<TOutput[]>(this.outputsUrl);
  }
  public setOutputs(outputs: any) {
    return this.http.post(this.outputsUrl, outputs);
  }

  public getInputs(): Observable<TInput[]> {
    return this.http.get<TInput[]>(this.inputsUrl);
  }
  public setInputs(inputs: any) {
    return this.http.post(this.inputsUrl, inputs);
  }
  // getDeviceInfo(): Observable<TDeviceInfo> {
  //   return this.http.get<TDeviceInfo>(this.infoUrl);
  // }
  public getDeviceInfo(): Observable<any> {
    return this.http.get(this.infoUrl);
  }
  
  public getNetwork(): Observable<any> {
    return this.http.get(this.networkUrl);
  }
  public setNetwork(network: any) {
    return this.http.post(this.networkUrl, network);
  }

  public getScheduler(): Observable<any> {
    return this.http.get(this.schedulerUrl);
  }
  public setScheduler(scheduler: any) {
    return this.http.post(this.schedulerUrl, scheduler);
  }
}