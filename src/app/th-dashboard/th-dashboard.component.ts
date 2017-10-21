import { Component, OnInit } from '@angular/core';
import { DayAppliedStatistic } from '../models/day-applied-statistic';
import { PortalStatistic } from '../models/portal-statistic';
import { DashboardPosition } from '../models/dashboard-position';

@Component({
  selector: 'app-th-dashboard',
  templateUrl: './th-dashboard.component.html',
  styleUrls: ['./th-dashboard.component.css']
})
export class ThDashboardComponent implements OnInit {

  positions: DashboardPosition[];
  
  constructor() { }

  ngOnInit() {
    
    this.positions = [
        {
          Name: "Senior .Net Backend Developer", AmountApplied: 7, AmountRejected: 1, AmountForReview: 6,
            AssessmentStatistics: [
              {AssessmentTypeName: "No Fit", Color: 0, Amount: 2},
              {AssessmentTypeName: "Adequate Fit", Color: 0, Amount: 2},
              {AssessmentTypeName: "Good Fit", Color: 0, Amount: 1},
              {AssessmentTypeName: "Very Good Fit", Color: 0, Amount: 0},
              {AssessmentTypeName: "Awesome Fit", Color: 0, Amount: 0},
            ] 
        },
        {
          Name: "Junior .Net Backend Developer", AmountApplied: 25, AmountRejected: 3, AmountForReview: 22,
            AssessmentStatistics: [
              {AssessmentTypeName: "No Fit", Color: 0, Amount: 14},
              {AssessmentTypeName: "Adequate Fit", Color: 0, Amount: 12},
              {AssessmentTypeName: "Good Fit", Color: 0, Amount: 3},
              {AssessmentTypeName: "Very Good Fit", Color: 0, Amount: 0},
              {AssessmentTypeName: "Awesome Fit", Color: 0, Amount: 0},
            ] 
        }
      ];
  }
}

