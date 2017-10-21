import { Component, OnInit, Input } from '@angular/core';
import { DashboardPosition } from '../../models/dashboard-position';
import { DayAppliedStatistic } from '../../models/day-applied-statistic';

@Component({
  selector: 'dashboard-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  @Input()
  position: DashboardPosition;
  StatisticsForLastWeek:DayAppliedStatistic[];
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
