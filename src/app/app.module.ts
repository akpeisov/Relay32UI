import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { LayoutModule } from '@angular/cdk/layout';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { InputsPageComponent } from './inputs-page/inputs-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { OutputElementComponent } from './output-element/output-element.component';
import { OutputsPageComponent } from './outputs-page/outputs-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { InputElementComponent } from './input-element/input-element.component';
import { SchedulerPageComponent } from './scheduler-page/scheduler-page.component';
import { SchedulerElementComponent } from './scheduler-element/scheduler-element.component';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SystemPageComponent } from './system-page/system-page.component';
import { NotifierComponent } from './notifier-component/notifier.component';
import { ConfirmationComponent } from './confirmation.component/confirmation.component';

const appRoutes: Routes = [
  { path: '', component: OutputsPageComponent},
  { path: 'settings', component: SettingsPageComponent},
  { path: 'scheduler', component: SchedulerPageComponent},
  { path: 'inputs', component: InputsPageComponent},
  { path: 'system', component: SystemPageComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OutputElementComponent,    
    SettingsPageComponent,
    OutputsPageComponent,
    InputsPageComponent,
    InputElementComponent,
    SchedulerPageComponent,
    SchedulerElementComponent,
    NotifierComponent,
    SystemPageComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,        
    LayoutModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    NgxMatTimepickerModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
