import { Component, OnInit } from '@angular/core';
import { DayAppliedStatistic } from '../models/day-applied-statistic';
import { PortalStatistic } from '../models/portal-statistic';

@Component({
  selector: 'app-th-dashboard',
  templateUrl: './th-dashboard.component.html',
  styleUrls: ['./th-dashboard.component.css']
})
export class ThDashboardComponent implements OnInit {

  StatisticsForLastWeek:DayAppliedStatistic[];
  bars:PortalStatistic[];
  constructor() { }

  ngOnInit() {
    this.StatisticsForLastWeek = [
      { Day: new Date(2017,10, 21), 
        DayStatistics:[ 
          {Source: "Karriere", Color: 5000, Amount: 3},
          {Source: "Stepstone", Color: 7000, Amount: 5} 
        ]
      },
      { Day: new Date(2017,10, 20), 
        DayStatistics:[ 
          {Source: "Karriere", Color: 5000, Amount: 1},
          {Source: "Stepstone", Color: 7000, Amount: 2} 
        ]
      },
      { Day: new Date(2017,10, 19), 
        DayStatistics:[ 
          {Source: "Karriere", Color: 5000, Amount: 0},
          {Source: "Stepstone", Color: 7000, Amount: 1} 
        ]
      },
      { Day: new Date(2017,10, 18), 
        DayStatistics:[ 
          {Source: "Karriere", Color: 5000, Amount: 1},
          {Source: "Stepstone", Color: 7000, Amount: 1} 
        ]
      },
      { Day: new Date(2017,10, 17), 
        DayStatistics:[ 
          {Source: "Karriere", Color: 5000, Amount: 2},
          {Source: "Stepstone", Color: 7000, Amount: 0} 
        ]
      }
    ];

  }
}

