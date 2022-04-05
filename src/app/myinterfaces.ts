export interface TOutput {    
    id: number;
    name: string;
    state: string;
    type: string;
    on: number;
    off: number;
    duration: number;
    timer: number;
  }

export interface TRule {    
    event: string;
    output: number;
    duration: number;
    action: string;    
  }  

export interface TInput {    
    id: number;
    name: string; 
    type: string;
    rules: TRule[];    
  }  

export interface TDeviceInfo {    
    freememory: number;
    uptime: string;
    curdate: string;
    devicename: string;
    version: string;
  }  

export interface SelectType {
    value?: string;
    viewValue: string;
  }