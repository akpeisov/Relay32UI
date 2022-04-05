import { Component, OnInit } from '@angular/core';
import { RestServices } from '../rest.services';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';


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
  settings: any;
  constructor(private restServices: RestServices) { }

  ngOnInit(): void {
    this.restServices.getNetwork().subscribe(data => {
      this.settings = data;          
    }, error => console.log(error));
  }

  ipFormControl = new FormControl('', [Validators.required,
                                          Validators.pattern('(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)')]);
  matcher = new MyErrorStateMatcher();

  saveButton() {
    this.restServices.setNetwork(this.settings).subscribe(data => {
      this.settings = data;          
    }, error => console.log(error));
  }
}
