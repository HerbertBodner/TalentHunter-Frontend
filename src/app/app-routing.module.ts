import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThDashboardComponent } from './th-dashboard/th-dashboard.component';
import { ListCandidatesComponent } from './list-candidates/list-candidates.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: ThDashboardComponent,
    
  },
  {
    path: 'positions/:id/candidates',
    component: ListCandidatesComponent,
  },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
