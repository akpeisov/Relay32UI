export interface TOutput {    
    id?: number;
    name: string;
    state?: string;
    type: string;
    on?: number;
    off?: number;
    duration?: number;
    timer?: number;
    rid?: number;
    slaveid?: number;
    default?: string;
}

export interface TRule {    
    event: string;
    output: number;
    duration: number;
    action: string;
    acl?: TACL[];
    type: string;
    actions?: TAction[];
  }  

export interface TACL {    
    type: string;
    id: number;
    io: string;
    state: string;
  }    

export interface TInput {    
    id: number;
    name: string; 
    type: string;
    rules: TRule[];    
  }  

export interface TAction {
  output: number;
  action: string;
  duration?: number;
  type?: string;  // w(wait) or c(common)
  input?: number; // for scheduler
  id?: number;
}  

export interface TTask {
  time: number;
  name: string;
  grace: number;
  done: boolean;
  enabled: boolean;
  actions: TAction[];
  dow: any[];
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
    disabled?: boolean;
  }

export interface TMBSlave {
  id: number,
  ip?: string
}

export interface TModBus {
  enabled: boolean,
  mode: string,
  type: string,
  readTimeOut?: number,
  pollingTime?: number,
  actionOnSameSlave?: boolean,
  maxRetries?: number,
  slaves?: TMBSlave[],
  slaveid?: number;
}

export interface TRLog {
  enabled: boolean,
  server: string,
  port: number
}

export interface TMQTT {
  enabled: boolean,
  url: string 
}

export interface TFTP {
  enabled: boolean,
  user: string,
  pass: string
}

export interface TEth {
  enabled: boolean,
  dhcp: boolean,
  ip: string,
  netmask: string,
  gateway: string,
  resetGPIO: number
}

export interface TWiFi {
  enabled: boolean,
  dhcp: boolean,
  ip: string,
  netmask: string,
  gateway: string,
  ssid: string,
  pass: string
}

export interface TSettings {
    rlog: Partial<TRLog>;
    eth: Partial<TEth>;
    wifi: Partial<TWiFi>;    
    modbus: Partial<TModBus>;
    mqtt: Partial<TMQTT>;
    ftp: Partial<TFTP>;
    dns: string;
    hostname: string;
    ntpserver: string;
    ntpTZ: string;
}