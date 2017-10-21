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
    this.position = { Name: "Senior .Net Backend Developer", AmountApplied: 25, AmountRejected: 3 };
  }

}
