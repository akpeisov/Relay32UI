import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { ConfirmationComponent } from './confirmation.component/confirmation.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  
  confirmDialog2(msg: string): void {
    this.dialog
      .open(ConfirmationComponent, {data: {message: msg}} )
      .afterClosed();
  }

  confirmDialog(msg: string): Observable<boolean> {
    return this.dialog
      .open(ConfirmationComponent, {
        data: {message: msg}
      })
      .afterClosed();
  }
}
