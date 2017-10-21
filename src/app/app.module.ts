import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThDashboardComponent } from './th-dashboard/th-dashboard.component';
import { PositionComponent } from './th-dashboard/position/position.component';

@NgModule({
  declarations: [
    AppComponent,
    ThDashboardComponent,
    PositionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
