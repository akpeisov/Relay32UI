import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TOutput } from './toutput';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class ConfigService {
  constructor(private http: HttpClient) { }

  outputsUrl = '/outputs';

  getOutputs(): Observable<TOutput[]> {
    return this.http.get<TOutput[]>(this.outputsUrl);
  }
  
}