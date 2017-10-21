import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThDashboardComponent } from './th-dashboard/th-dashboard.component';
import { PositionComponent } from './th-dashboard/position/position.component';
import { ListCandidatesComponent } from './list-candidates/list-candidates.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ThDashboardComponent,
    PositionComponent,
    ListCandidatesComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
