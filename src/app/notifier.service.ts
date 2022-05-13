import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierComponent } from './notifier-component/notifier.component';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(displayMessage: string, type: 'error' | 'ok') {
    this.snackBar.openFromComponent(NotifierComponent, {
      data: {
        message: displayMessage,
        type: type
      },
      duration: type === 'ok' ? 1500 : 8000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      panelClass: type
    });
  }

}
