import { Component, OnInit } from '@angular/core';
import { DashboardPosition } from '../../models/dashboard-position';

@Component({
  selector: 'dashboard-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  position: DashboardPosition;
  constructor() { }

  ngOnInit() {
    this.position = { Name: "Senior .Net Backend Developer", AmountApplied: 25, AmountRejected: 3, AmountForReview: 22,
    AssessmentStatistics: [
        {AssessmentTypeName: "No Fit", Color: 0, Amount: 14},
        {AssessmentTypeName: "Adequate Fit", Color: 0, Amount: 12},
        {AssessmentTypeName: "Good Fit", Color: 0, Amount: 3},
        {AssessmentTypeName: "Very Good Fit", Color: 0, Amount: 0},
        {AssessmentTypeName: "Awesome Fit", Color: 0, Amount: 0},
      ] 
    };
  }

}
