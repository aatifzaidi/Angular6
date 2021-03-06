import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeadingComponent } from './heading/heading.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UsernameComponent } from './username/username.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    NavigationComponent,
    HeadingComponent,
    UsernameComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
